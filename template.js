/**
 * Version : Ver 1.2016.05161359
 * Author  : jihwan, Chung
 * 
 * Copyright (c) 2016 "Auction Promotion Layout", contributors
 * Licensed under the MIT license.
 */


'use strict';

// 필요한 Node 모듈들을 불러온다.
var http = require('http'),
	join = require("path").join,
	fs   = require('fs');

// 프로젝트 설명 글.
exports.description = 'Auction Promotion Layout';

// 프롬프트 입력이 시작되기 전에 출력될 글.
exports.notes = '옥션 프로모션 작업의 기본적인 레이아웃을 생성합니다.';

// 템플릿 생성 완료 후 출력될 글.
exports.after = '';

// 아래 와일드 카드와 일치하는 파일 또는 디렉토리가 존재하면 경고 발생.
exports.warnOn = '*';

// 템플릿 초기화.
exports.template = function(grunt, init) {

	// 디렉토리를 생성한다. root 파일 안의 디렉토리가 파일을 가지고 있지 않으면 복사되지 않으므로
	// 파일이 없는 디렉토리는 강제로 생성해야한다.
	function makeEmptyDirectory(dirpaths) {
		var i, n;

		for (i = 0, n = dirpaths.length; i < n; i++) {
			grunt.file.mkdir(join(init.destpath(), dirpaths[i]));
			grunt.log.writeln('Writing ' + dirpaths[i] + '...' + 'OK'.cyan);
		}
	}

	// Run grunt-init process
	init.process({}, [
		init.prompt('name', 'AuctionCode'),
		init.prompt('namespace', 'PromotionName'),
		init.prompt('version', '0.0.1'),
		init.prompt('author_name'),
		init.prompt('author_email')
	], function (err, props) {

		var files = null,
			librarys = null,
			filename = '';

		// 파일을 가지고 있지 않은 디렉토리를 강제로 생성한다.
		makeEmptyDirectory([
			'build',
			'build/dev',
			'build/dev/css',
			'build/dev/images',
			'build/images',
			'demo',
			'demo/images',
			'demo/includes',
			'dev',
			'layout'
		]);

		// 파일을 복사한다. (and process).
		files = init.filesToCopy(props);

		// 실제로 파일을 복사한다.
		init.copyAndProcess(files, props);
	});
};
