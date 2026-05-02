Promise.all(
  ["./js/workspace.xml", "./js/toolbox.xml"].map(async (file) => {
    return fetch(file).then((res) => {
      return res.text();
    });
  }),
)
  .then((xmls) => {
    xmls.forEach((xml) => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(xml, "application/xml");
      document.body.appendChild(doc.documentElement);
    });
  })
  .then(() => {
    /* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
    var toolbox = document.getElementById("toolbox");

    var options = {
      toolbox: toolbox,
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: "start",
      css: true,
      media: "https://blockly-demo.appspot.com/static/media/",
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true,
      grid: {
        spacing: 20,
        length: 1,
        colour: "#888",
        snap: false,
      },
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
    };

    /* Inject your workspace */
    var workspace = Blockly.inject("blocklyDiv", options);
    var myInterpreter = null;
    var id = 0;

    var adddir = `<div class="others">
	<button id="showQrCode" class="btn btn-success">QRコード</button>
	<button id="execCode" class="btn btn-primary">実行する</button>
	<button id="stopCode" class="btn btn-primary">停止する</button>
	<button id="fileload" class="btn btn-success">読み込み</button>
	<button id="filesave" class="btn btn-success">保存</button>
	<div>`;
    $(".injectionDiv").append(adddir);
    var execbtn = document.getElementById("execCode");
    var stopbtn = document.getElementById("stopCode");
    var savebtn = document.getElementById("filesave");
    var loadbtn = document.getElementById("fileload");
    var is_cencer_data = false;
    var qrcodeWin = null;
    var exec_code_flag = false;

    /* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

    /* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
    var workspaceBlocks = document.getElementById("workspaceBlocks");

    /* Load blocks to workspace. */
    Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

    async function getMyId() {
      let data = await fetch("./getid");
      let obj = await data.json();
      return obj.id;
    }

    var executableCode = "";

    function addCode(isinvisible) {
      if (isinvisible) {
        Blockly.JavaScript.STATEMENT_PREFIX = "";
      } else {
        Blockly.JavaScript.STATEMENT_PREFIX =
          "if(!exec_code_flag){return false;}\n";
      }
      executableCode =
        "(async()=>{\n" +
        Blockly.JavaScript.workspaceToCode(workspace) +
        "})();";
      console.log(executableCode);
    }

    function showCode() {
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      const pre = document.getElementById("jsCode");
      addCode(true);
      //executablecodeの中にセンサー関係があるかどうか
      if (!is_cencer_data && executableCode.indexOf("SmartDevice") !== -1) {
        if (!execbtn.classList.contains("btn-disable")) {
          execbtn.classList.add("btn-disable");
        }
      } else {
        if (execbtn.classList.contains("btn-disable")) {
          execbtn.classList.remove("btn-disable");
        }
      }
      pre.innerHTML = executableCode;
      hljs.highlightBlock(pre);
    }

    function showQrCode(id) {
      var url = location.href;
      var arr = url.split("/");
      var str = arr[arr.length - 1];
      url = url.replace(str, "") + "smartview.html";
      var program = btoa(unescape(encodeURIComponent(executableCode)));
      let query = `?id=${id}&program=${encodeURIComponent(program)}`;
      // 		// FetchAPIのオプション準備
      // 		let param  = {
      // 			method: "POST",

      // 		// リクエストボディ
      // 		body: program
      //   };

      (async () => {
        let data = await fetch("./dataset" + query);
        // let data = await fetch('./dataset', param);
        let obj = await data.json();
        console.log(obj);
        if (!qrcodeWin) {
          qrcodeWin = await Utilities.LoadHTML("qrcode.html", 280, 280);
          qrcodeWin.onbeforeunload = () => {
            qrcodeWin = null;
          };
        }
        let qrdiv = qrcodeWin.document.getElementById("qrcode");
        $(qrdiv).empty();
        $(qrdiv).qrcode(url + `?id=${id}`);
        qrdiv.insertAdjacentHTML(
          "afterend",
          "<a href=" + url + `?id=${id}` + ">blocklyを実行</a>",
        );
        console.log(url + `?id=${id}`);
      })();
    }

    function qrCode() {
      showQrCode(id);
    }

    async function requestData(id) {
      let query = `?id=${id}`;
      console.log("mo");
      let data = await fetch("./startaccept" + query);
      console.log(data);
      let obj = await data.json();
      console.log("type:", obj.type);
      // スマホからデータが送られてきた
      switch (obj.type) {
        case "canvas": {
          obj.data = decodeURIComponent(obj.data);
          console.log(obj);
          // document.getElementById('img').src = obj.data;
          let cw = await Utilities.LoadHTML("canvas.html", 800, 600);
          let _img = cw.document.getElementById("element");
          _img.src = obj.data;
          break;
        }
        case "cencer": {
          console.log(obj);
          SmartDevice.ReloadCencerData(obj.data);
          is_cencer_data = true;
          if (execbtn.classList.contains("btn-disable")) {
            execbtn.classList.remove("btn-disable");
          }
          break;
        }
        default:
      }
      requestData(id);
    }

    document
      .getElementById("showQrCode")
      .addEventListener("click", qrCode, false);
    workspace.addChangeListener((e) => {
      //		if ( (e instanceof Blockly.Events.Create) || (e instanceof Blockly.Events.Ui) ) {}
      //	else{
      showCode();
      //}
    });

    function showOpenFileDialog() {
      return new Promise((res) => {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = ".xml";
        input.onchange = (event) => {
          res(event.target.files[0]);
        };
        input.click();
      });
    }

    function readAsText(file) {
      return new Promise((res) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => {
          res(reader.result);
        };
      });
    }

    loadbtn.addEventListener("click", async () => {
      const file = await showOpenFileDialog();
      const content = await readAsText(file);
      let xml = Blockly.Xml.textToDom(content);
      workspace.clear();
      Blockly.Xml.domToWorkspace(xml, workspace);
      console.log(xml);
    });

    savebtn.addEventListener("click", () => {
      let xml = Blockly.Xml.workspaceToDom(workspace);
      let blob = new Blob([Blockly.Xml.domToText(xml)]);
      let objectURL = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      let e = document.createEvent("MouseEvent");
      a.download = "test.xml";
      a.href = objectURL;
      e.initEvent(
        "click",
        true,
        true,
        window,
        1,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null,
      );
      a.dispatchEvent(e);
    });

    function execCode() {
      if (execbtn.classList.contains("btn-disable")) {
        return;
      }
      Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
      addCode(false);
      exec_code_flag = true;
      new Function(
        `
		var exec_code_flag = true;
		document.getElementById('stopCode').addEventListener('click',()=>{exec_code_flag=false;});
		` +
          "try{" +
          executableCode +
          "}catch(e){alert(e);}",
      )();
    }

    stopbtn.addEventListener("click", stopExecution);

    function stopExecution() {
      exec_code_flag = false;
    }

    (async () => {
      id = await getMyId();
      requestData(id);
    })();

    document
      .getElementById("execCode")
      .addEventListener("click", execCode, false);
  });
