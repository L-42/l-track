# l-track

无埋点监控

## Get Started

```bash
# 安装依赖
yarn

# 开发调试
yarn dev

# build
yarn build
```

## 引入方式

```javascript
<script type='text/javascript'>
    var ltk = ltk || [];
    window.ltk = ltk;
    (function(){
      ltk.push(['init', '您的项目ID']);
      (function() {
        var ltrack = document.createElement('script');
        ltrack.type='text/javascript';
        ltrack.async = true;
        ltrack.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + '<l-track 的 JS url>';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ltrack, s);
      })();
    })();
</script>
```
