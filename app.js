
const { exec } = require('child_process');
const chokidar = require('chokidar');
const bServer = require('browser-sync').create();
const chalk = require('chalk');

// 监听 TS 编译配置
const watcher = chokidar.watch(['./src/ts/'], {
    persistent: true,
    ignored: /(^|[/\\])\../, // 忽略隐藏文件
    ignoreInitial: true, // 忽略初始化时的变化
});

// 处理 TSC 编译文件
watcher.on('change', (path) => {
  let pathArr = path.split('\\');
  let fileName = pathArr[pathArr.length - 1];
  let dir = path.split('src\\ts')[1].split('\\' + fileName)[0].replace(/\\/g, '/');
  dir = dir.length > 1 ? dir : '';

  exec(`tsc ${path} --outDir ./src/js${dir} -m ESNext -t ESNext --moduleResolution node --esModuleInterop true --typeRoots []`, (error) => {
    if (error) {
      console.error(chalk.red(`编译失败: ${error.message}`));
    } else {
      console.log(chalk.green(`编译成功`));
    }
  });
});


bServer.init({
	server: {
		baseDir: './'
	},
	files: [
    './**/*.html',
    './**/*.css',
    './**/*.js'
  ],
  ignore: [
    'node_modules/**/*.*',
    'dist/**/*.*'
  ],
	port: 2306,
	open: true,
	notify: false
});