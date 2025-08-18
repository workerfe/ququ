var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '曲曲工具 - 便捷的在线工具网站' });
});

/* 文本处理工具 */
router.get('/json-formatter', function(req, res, next) {
  res.render('tools/json-formatter', { title: 'JSON格式化工具' });
});

router.get('/base64', function(req, res, next) {
  res.render('tools/base64', { title: 'Base64编码解码' });
});

router.get('/url-encode', function(req, res, next) {
  res.render('tools/url-encode', { title: 'URL编码解码' });
});

/* 开发工具 */
router.get('/color-picker', function(req, res, next) {
  res.render('tools/color-picker', { title: '颜色选择器' });
});

router.get('/regex-test', function(req, res, next) {
  res.render('tools/regex-test', { title: '正则表达式测试' });
});

router.get('/hash-generator', function(req, res, next) {
  res.render('tools/hash-generator', { title: 'Hash生成器' });
});

/* 生活工具 */
router.get('/qr-code', function(req, res, next) {
  res.render('tools/qr-code', { title: '二维码生成器' });
});

router.get('/timestamp', function(req, res, next) {
  res.render('tools/timestamp', { title: '时间戳转换' });
});

router.get('/password-generator', function(req, res, next) {
  res.render('tools/password-generator', { title: '密码生成器' });
});

module.exports = router;
