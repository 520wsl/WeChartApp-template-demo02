var app      = getApp();

var pageData = {
  data: {"carousel1":{"type":"carousel","style":"height:337.5rpx;margin-left:0;margin-right:auto;margin-top:0;opacity:1;","content":[{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_149310207058feedf6cd045.jpg"},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58feed6de6384.jpg"},{"customFeature":[],"pic":"http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_149310203158feedcf97b60.jpg"}],"customFeature":{"autoplay":true,"interval":2,"carouselgroupId":null},"animations":[],"page_form":"","compId":"carousel1"},"album2":{"type":"album","style":"background-color:rgb(255, 255, 255);color:rgb(153, 153, 153);font-size:23.4375rpx;margin-top:0rpx;opacity:1;text-align:center;margin-left:auto;","ul_style":"padding-left:75rpx;padding-top:7.03125rpx;margin-left:auto;","html_mode":"sec-mode","li":[{"customFeature":{"action":"inner-link","page-link":"9ftP7f2G9Z_page10006"},"li_class":"album-pic router","action":"inner-link","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff26ae8d0c5.png","title":"\u7cbe\u51c6\u6276\u8d2b","li_style":"width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;border-radius:0rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10006\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"inner-link","page-link":"9ftP7f2G9Z_page10008"},"li_class":"album-pic router","action":"inner-link","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff26afa1a41.png","title":"\u516c\u76ca\u9879\u76ee","li_style":"width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;border-radius:0rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10008\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"inner-link","page-link":"9ftP7f2G9Z_page10007"},"li_class":"album-pic router","action":"inner-link","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff26afdb5cd.png","title":"\u516c\u76ca\u6d3b\u52a8","li_style":"width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;border-radius:0rpx;margin-left:auto;","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10007\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"customFeature":{"action":"call","phone-num":"0755-66606955"},"action":"call","li_class":"album-pic","pic":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff26d87c45c.png","title":"\u8054\u7cfb\u6211\u4eec","li_style":"width:93.75rpx;margin-right:75rpx;margin-bottom:7.03125rpx;margin-left:auto;","img_style":"height:93.75rpx;border-radius:0rpx;margin-left:auto;","eventParams":"{\"phone_num\":\"0755-66606955\"}","eventHandler":"tapPhoneCallHandler"}],"customFeature":{"col":4,"imgHeight":"40px","mode":1,"padding-left":"32","padding-top":3,"picBorderRadius":"0px","row":"1","action":"","imgWidth":76.25},"itemType":"album","itemParentType":null,"itemIndex":"album2","content":""},"free_vessel3":{"type":"free-vessel","style":"width:747.65625rpx;height:93.75rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:23.4375rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:70.3125rpx;width:210.9375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:0rpx;top:11.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58fefacf14631.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","action":"inner-link","inner-page-link":"prePage"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel3","itemType":"picture","itemParentType":"free-vessel","itemIndex":0,"eventParams":"{\"inner_page_link\":\"prePage\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:210.9375rpx;top:23.4375rpx;margin-right:0;","content":"\u54ab\u5c3a\u516c\u76ca\uff0c\u8ba9\u516c\u76ca\u4e0d\u9065\u8fdc","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:23.4375rpx;margin-right:0;","content":"\u4e86\u89e3","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel3","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:700.78125rpx;top:18.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58e3a53ada620.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel3"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"9ftP7f2G9Z_page10011"},"animations":[],"page_form":"","compId":"free_vessel3","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel3","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10011\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel4":{"type":"free-vessel","style":"width:747.65625rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:2.34375rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:63.28125rpx;top:23.4375rpx;margin-right:0;","content":"\u6700\u65b0\u53d1\u73b0","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:700.78125rpx;top:18.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58e3a53ada620.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel4"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:23.4375rpx;margin-right:0;","content":"\u66f4\u591a","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel4","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:37.5rpx;width:37.5rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:18.75rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff0695ec4a5.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel4"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"9ftP7f2G9Z_page10016"},"animations":[],"page_form":"","compId":"free_vessel4","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel4","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10016\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"list_vessel5":{"type":"list-vessel","style":"margin-top:-18.75rpx;opacity:1;height:187.5rpx;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:187.5rpx;margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:-4.6875rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:140.625rpx;width:210.9375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:23.4375rpx;","content":"https:\/\/cdn.jisuapp.cn\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"zxtp","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(53, 53, 53);font-size:32.8125rpx;height:43.750002980232rpx;width:471.09375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:257.8125rpx;top:28.125rpx;margin-right:0;","content":"\u6807\u9898","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"zxbt","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:23.4375rpx;height:43.750002980232rpx;width:229.6875rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:257.8125rpx;top:117.1875rpx;margin-right:0;","content":"\u65f6\u95f4","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"zxsj","ifMust":true},"animations":[],"compId":"data.content[2]","parentCompid":"data.content[0]","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(233, 66, 33);font-size:23.4375rpx;height:70.3125rpx;width:117.1875rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:614.0625rpx;top:117.1875rpx;margin-right:0;","content":"\u6240\u5728\u6807\u7b7e","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"zxbq","ifMust":true},"animations":[],"compId":"data.content[3]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel5","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"zx","id":"list-591291709803","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"9ftP7f2G9Z_page10004","margin":"1","name":"\u5217\u8868","source":"5065030","vesselAutoheight":0,"mode":0,"height":"80px"},"animations":[],"page_form":"","compId":"list_vessel5","list_style":"margin-bottom:2.34375rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-591291709803","is_more":1,"param":"{\"id\":\"list-591291709803\",\"form\":\"zx\",\"page\":1,\"app_id\":\"UR4Dns7pRR\",\"is_count\":0}","form":"zx"},"free_vessel6":{"type":"free-vessel","style":"width:747.65625rpx;height:93.75rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:23.4375rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:70.3125rpx;width:210.9375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:0rpx;top:11.71875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_59003f0aa591f.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel6"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:210.9375rpx;top:23.4375rpx;margin-right:0;","content":"\u5fd7\u613f\u5fd7\u670d\u52a1\u961f\u62db\u52df\u5fd7\u613f\u8005","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel6","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:644.53125rpx;top:23.4375rpx;margin-right:0;","content":"\u62a5\u540d","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel6","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:700.78125rpx;top:18.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58e3a53ada620.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel6"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"9ftP7f2G9Z_page10014"},"animations":[],"page_form":"","compId":"free_vessel6","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel6","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10014\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"free_vessel7":{"type":"free-vessel","style":"width:747.65625rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:2.34375rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:63.28125rpx;top:23.4375rpx;margin-right:0;","content":"\u63a8\u8350\u4e13\u9898","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:46.875rpx;width:46.875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:700.78125rpx;top:18.75rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58e3a53ada620.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel7"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:28.125rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:646.875rpx;top:23.4375rpx;margin-right:0;","content":"\u66f4\u591a","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[2]","parentCompid":"free_vessel7","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:37.5rpx;width:37.5rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:18.75rpx;top:23.4375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff0ab1cdf5c.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[3]","parentCompid":"free_vessel7"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"inner-link","inner-page-link":"9ftP7f2G9Z_page10018"},"animations":[],"page_form":"","compId":"free_vessel7","itemType":"free-vessel","itemParentType":null,"itemIndex":"free_vessel7","eventParams":"{\"inner_page_link\":\"9ftP7f2G9Z_page10018\",\"is_redirect\":0}","eventHandler":"tapInnerLinkHandler"},"list_vessel8":{"type":"list-vessel","style":"margin-top:0rpx;opacity:1;height:309.375rpx;background-color:rgb(255, 255, 255);margin-left:auto;","content":[{"type":"free-vessel","style":"width:750rpx;height:309.375rpx;margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:-23.4375rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:187.5rpx;width:337.5rpx;margin-left:0;margin-right:0;margin-top:0;left:23.4375rpx;top:0rpx;position:absolute;","content":"https:\/\/cdn.jisuapp.cn\/static\/webapp\/images\/default.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5","segment":"rwtp2","ifMust":true},"animations":[],"compId":"data.content[0]","parentCompid":"data.content[0]"},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(102, 102, 102);font-size:28.125rpx;height:43.750002980232rpx;width:332.8125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:23.4375rpx;top:206.25rpx;margin-right:0;","content":"\u6807\u9898","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"rwbt","ifMust":true},"animations":[],"compId":"data.content[1]","parentCompid":"data.content[0]","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:23.4375rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:23.4375rpx;top:253.125rpx;margin-right:0;","content":"\u6211\u662f\u6587\u672c","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"rwsj","ifMust":true},"animations":[],"compId":"data.content[2]","parentCompid":"data.content[0]","markColor":"","mode":0},{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(233, 66, 33);font-size:23.4375rpx;height:56.25rpx;width:133.59375rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:239.0625rpx;top:253.125rpx;margin-right:0;","content":"\u6240\u5728\u6807\u7b7e","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0","segment":"rwbq","ifMust":true},"animations":[],"compId":"data.content[3]","parentCompid":"data.content[0]","markColor":"","mode":0}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"parentCompid":"list_vessel8","compId":"data.content[0]"}],"customFeature":{"background-color":"rgb(255, 255, 255)","background-image":"","form":"rw","id":"list-539010184119","lineBackgroundColor":"rgb(255, 255, 255)","lineBackgroundImage":"","link":"9ftP7f2G9Z_page10005","margin":"3","name":"\u5217\u8868","source":"5065029","vesselAutoheight":0,"mode":1,"height":"132px"},"animations":[],"page_form":"","compId":"list_vessel8","list_style":"margin-bottom:7.03125rpx;background-color:rgb(255, 255, 255);margin-left:auto;","customFeature_id":"list-539010184119","is_more":1,"param":"{\"id\":\"list-539010184119\",\"form\":\"rw\",\"page\":1,\"app_id\":\"UR4Dns7pRR\",\"is_count\":0}","form":"rw"},"free_vessel9":{"type":"free-vessel","style":"width:747.65625rpx;height:82.03125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:23.4375rpx;opacity:1;","content":[{"type":"text","style":"background-color:rgba(0, 0, 0, 0);border-color:rgb(34, 34, 34);border-style:none;border-width:4.6875rpx;color:rgb(153, 153, 153);font-size:30.46875rpx;height:44.53125rpx;line-height:44.53125rpx;margin-left:0;margin-top:0;opacity:1;text-align:left;position:absolute;left:67.96875rpx;top:23.4375rpx;margin-right:0;","content":"\u516c\u76ca\u673a\u6784","customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":"5","boxStyle":false,"boxX":"0","boxY":"0"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel9","markColor":"","mode":0},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:30.46875rpx;width:30.46875rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:23.4375rpx;top:25.78125rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff079972210.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel9"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0,"action":"none","inner-page-link":"9ftP7f2G9Z_page10006"},"animations":[],"page_form":"","compId":"free_vessel9"},"free_vessel10":{"type":"free-vessel","style":"width:750rpx;height:100.78125rpx;background-color:rgb(255, 255, 255);margin-bottom:auto;margin-left:0rpx;margin-right:auto;margin-top:0rpx;opacity:1;","content":[{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:53.90625rpx;width:360.9375rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:49.21875rpx;top:9.375rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff089452493.jpg","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[0]","parentCompid":"free_vessel10"},{"type":"picture","style":"opacity:1;background-color:transparent;border-color:rgb(34, 34, 34);border-radius:0rpx;border-style:none;border-width:0rpx;height:49.21875rpx;width:288.28125rpx;margin-left:0;margin-right:0;margin-top:0;position:absolute;left:417.1875rpx;top:4.6875rpx;","content":"http:\/\/img.weiye.me\/zcimgdir\/album\/file_58ff089383be3.png","customFeature":{"boxShadow":"5","boxColor":"#000","boxX":"0","boxY":"0","boxR":"5"},"animations":[],"compId":"data.content[1]","parentCompid":"free_vessel10"}],"customFeature":{"boxColor":"rgb(0, 0, 0)","boxR":5,"boxStyle":false,"boxX":0,"boxY":0},"animations":[],"page_form":"","compId":"free_vessel10"},"has_tabbar":1,"page_hidden":true,"page_form":"","top_nav":{"navigationBarTitleText":"\u516c\u76ca"},"dataId":""},
    need_login: false,
      bind_phone: false,
    page_router: '9ftP7f2G9Z_page10000',
    page_form: 'none',
      dataId: '',
      list_compids_params: [{"compid":"list_vessel5","param":{"id":"list-591291709803","form":"zx","page":1,"app_id":"UR4Dns7pRR","is_count":0}},{"compid":"list_vessel8","param":{"id":"list-539010184119","form":"rw","page":1,"app_id":"UR4Dns7pRR","is_count":0}}],
      user_center_compids_params: [],
      goods_compids_params: [],
  prevPage:0,
      tostoreComps: [],
      carouselGroupidsParams: [{"compid":"carousel1"}],
      relobj_auto: [],
      bbsCompIds: [],
      dynamicVesselComps: [],
      communityComps: [],
      franchiseeComps: [],
      cityLocationComps: [],
      seckillOnLoadCompidParam: [],
      dynamicClassifyGroupidsParams: [],
      newClassifyGroupidsParams: [],
      videoListComps: [],
      videoProjectComps: [],
      newsComps: [],
      popupWindowComps: [],
        formVesselComps: [],
      searchComponentParam: [],
      topicComps: [],
      topicClassifyComps: [],
      topicSortComps: [],
      rowNumComps: [],
      sidebarComps: [],
      slidePanelComps: [],
    returnToVersionFlag: true,
  requesting: false,
  requestNum: 1,
  modelChoose: [],
  modelChooseId: '',
  modelChooseName: [],
  onLoad: function (e) {
    if (e.statisticsType == 11) {
      delete e.statisticsType
      delete e.needStatistics
    }
    app.onPageLoad(e);
    app.isNeedRewardModal();

    app.checkCanUse('navigator.target', 'canIUseNavigatorTarget', ['button', 'picture', 'text', 'layout-vessel', 'static-vessel', 'free-vessel', 'title-ele', 'album', 'carousel', 'suspension', 'list', 'announce']);
  },
  dataInitial: function () {
    app.pageDataInitial();
  },
  onPageScroll: function(e) {
    app.onPageScroll(e);
  },
  onShareAppMessage: function (e) {
    if (e.from == 'button') {
      if (e.target.dataset.from == 'topicButton') {
        return app.shareAppMessage({
          path: '/informationManagement/pages/communityDetail/communityDetail?detail=' + e.target.dataset.id,
          desc: e.target.dataset.desc,
          success: function(addTime) {
            app.getIntegralLog(addTime);
            app.CountSpreadCount(e.target.dataset.id);
          }
        });
      }
    };
    return app.onPageShareAppMessage(e, app.getIntegralLog);
  },
  onShow: function () {
    app.onPageShow();
  },
  onHide: function () {
    app.onPageHide();
  },
  reachBottomFuc: [],
  onReachBottom: function () {
    app.onPageReachBottom( this.reachBottomFuc );
  },
  onUnload: function () {
    app.onPageUnload();
  },
  slidePanelStart: function (e) {
    app.slidePanelStart(e);
  },
  slidePanelEnd: function (e) {
    app.slidePanelEnd(e);
  },
  onPullDownRefresh : function(){
    app.onPagePullDownRefresh();
  },
  changeDropDown:function(e){
    app.changeDropDown(e);
  },
  connectWifiHandler:function(e){
    app.connectWifiHandler(e)
  },
  tapPrevewPictureHandler: function (e) {
    app.tapPrevewPictureHandler(e);
  },
  suspensionBottom: function () {
    app.suspensionBottom(this);
  },
  pageScrollFunc: function (e) {
    app.pageScrollFunc(e);
  },
  dynamicVesselScrollFunc: function (e) {
    app.dynamicVesselScrollFunc(e);
  },
  goodsScrollFunc: function (e) {
    app.goodsScrollFunc(e);
  },
  takeoutStyleScrollFunc: function(e){
    app.takeoutStyleScrollFunc(e);
  },
  franchiseeScrollFunc: function (e) {
    app.franchiseeScrollFunc(e);
  },
  seckillScrollFunc: function (e) {
    app.seckillScrollFunc(e);
  },
  videoScrollFunc: function (e) {
    app.videoScrollFunc(e);
  },
  carouselVideoClose: function(e) {
    app.carouselVideoClose(e);
  },
  changeCount: function (e) {
    app.changeCount(e);
  },
  inputChange: function (e) {
    app.inputChange(e);
  },
  bindDateChange: function (e) {
    app.bindDateChange(e);
  },
  bindTimeChange: function (e) {
    app.bindTimeChange(e);
  },
  bindSelectChange: function (e) {
    app.bindSelectChange(e);
  },
  bindScoreChange: function (e) {
    app.bindScoreChange(e);
  },
  bindSliderChange: function (e) {
    app.bindSliderChange(e);
  },
  selectPicOption:function(e){
    app.selectPicOption(e);
  },
  formAddress: function(e){
    app.formAddress(e);
  },
  selectOptionOne: function (e) {
    app.selectOptionOne(e);
  },
  selectOptionSecond: function (e) {
    app.selectOptionSecond(e);
  },
  submitForm: function (e) {
    app.submitForm(e);
  },
  udpateVideoSrc: function (e) {
    app.udpateVideoSrc(e);
  },
  tapMapDetail: function (e) {
    app.tapMapDetail(e);
  },
  uploadFormImg: function (e) {
    app.uploadFormImg(e);
  },
  deleteUploadImg: function (e) {
    app.deleteUploadImg(e);
  },
  listVesselTurnToPage: function (e) {
    app.listVesselTurnToPage(e);
  },
  dynamicVesselTurnToPage: function (e) {
    app.dynamicVesselTurnToPage(e);
  },
  userCenterTurnToPage: function (e) {
    app.userCenterTurnToPage(e);
  },
  turnToGoodsDetail: function (e) {
    app.turnToGoodsDetail(e);
  },
  turnToFranchiseeDetail: function (e) {
    app.turnToFranchiseeDetail(e);
  },
  callFranchiseePhone: function(e){
    app.callFranchiseePhone(e);
  },
  turnToSeckillDetail: function (e) {
    app.turnToSeckillDetail(e);
  },
  sortListFunc: function (e) {
    app.sortListFunc(e);
  },
  bbsInputComment: function (e) {
    app.bbsInputComment(e);
  },
  bbsInputReply: function (e) {
    app.bbsInputReply(e);
  },
  uploadBbsCommentImage: function (e) {
    app.uploadBbsCommentImage(e);
  },
  uploadBbsReplyImage: function (e) {
    app.uploadBbsReplyImage(e);
  },
  deleteCommentImage: function (e) {
    app.deleteCommentImage(e);
  },
  deleteReplyImage: function (e) {
    app.deleteReplyImage(e);
  },
  bbsPublishComment: function (e) {
    app.bbsPublishComment(e);
  },
  clickBbsReplyBtn: function (e) {
    app.clickBbsReplyBtn(e);
  },
  bbsPublishReply: function (e) {
    app.bbsPublishReply(e);
  },
  searchList: function (e) {
    app.searchList(e);
  },
  selectLocal: function (e) {
    app.selectLocal(e);
  },
  cancelCity: function (e) {
    app.cancelCity(e);
  },
  bindCityChange: function (e) {
    app.bindCityChange(e);
  },
  submitCity: function (e) {
    app.submitCity(e);
  },
  openTakeoutLocation: function (e) {
    app.openTakeoutLocation(e);
  },
  callTakeout: function (e) {
    app.callTakeout(e);
  },
  getMoreAssess: function (e) {
    app.getMoreAssess(e);
  },
  changeEvaluate: function (e) {
    app.changeEvaluate(e)
  },
  deleteAllCarts: function (e) {
    app.deleteAllCarts(e);
  },
  deleteSingleCarts:function (e) {
    app.deleteSingleCarts(e);
  },
  clickCategory: function (e) {
    app.clickCategory(e);
  },
  goodsListMinus: function (e) {
    app.goodsListMinus(e);
  },
  goodsListPlus: function (e) {
    app.goodsListPlus(e);
  },
  cartListMinus: function (e) {
    app.cartListMinus(e);
  },
  cartListPlus: function (e) {
    app.cartListPlus(e);
  },
  changeAssessType: function (e) {
    app.changeAssessType(e);
  },
  showShoppingCartPop: function (e) {
    app.showShoppingCartPop(e);
  },
  hideShoppingCart: function (e) {
    app.hideShoppingCart(e);
  },
  showGoodsDetail: function (e) {
    app.showGoodsDetail(e);
  },
  hideDetailPop: function (e) {
    app.hideDetailPop(e);
  },
  hideModelPop: function (e) {
    app.hideModelPop(e);
  },
  chooseModel: function (e) {
    app.chooseModel(e);
  },
  sureChooseModel: function (e) {
    app.sureChooseModel(e);
  },
  clickChooseComplete: function (e) {
    app.clickChooseComplete(e);
  },
  reLocalAddress: function(e){
    app.reLocalAddress(e);
  },
  tapGoodsTradeHandler: function (e) {
    app.tapGoodsTradeHandler(e);
  },
  tapVideoHandler: function(e){
    app.tapVideoHandler(e);
  },
  tapVideoPlayHandler: function(e){
    app.tapVideoPlayHandler(e);
  },
  audioElePlay: function(e){
    app.audioElePlay(e);
  },
  tapInnerLinkHandler: function (e) {
    app.tapInnerLinkHandler(e);
  },
  tapToPluginHandler: function (e) {
    app.tapToPluginHandler(e);
  },
  tapPhoneCallHandler: function (e) {
    app.tapPhoneCallHandler(e);
  },
  tapNewClassifyShowSubClassify: function(e){
    app.tapNewClassifyShowSubClassify(e);
  },
  tapNewClassifyRefreshHandler: function(e){
    app.tapNewClassifyRefreshHandler(e);
  },
  tapRefreshListHandler: function (e) {
    app.tapRefreshListHandler(e);
  },
  tapGetCouponHandler: function (e) {
    app.tapGetCouponHandler(e);
  },
  tapCommunityHandler: function (e) {
    app.tapCommunityHandler(e);
  },
  tapTopicHandler: function (e) {
    app.tapTopicHandler(e);
  },
  tapNewsHandler: function (e) {
    app.tapNewsHandler(e);
  },
  tapPageShareHandler:function(e) {
    app.tapPageShareHandler(e);
  },
  turnToCommunityPage: function (e) {
    app.turnToCommunityPage(e);
  },
  tapToFranchiseeHandler: function (e) {
    app.tapToFranchiseeHandler(e);
  },
  tapToTransferPageHandler: function () {
    app.tapToTransferPageHandler();
  },
  tapToSeckillHandler: function (e) {
    app.tapToSeckillHandler(e);
  },
  tapToPromotionHandler: function () {
    app.tapToPromotionHandler();
  },
  tapToCouponReceiveListHandler: function () {
    app.tapToCouponReceiveListHandler();
  },
  tapToRechargeHandler: function () {
    app.tapToRechargeHandler();
  },
  tapToXcx: function (e) {
    app.tapToXcx(e);
  },
  tapFranchiseeLocation: function (e) {
    app.tapFranchiseeLocation(e);
  },
  showGoodsShoppingcart: function(e){
    app.showGoodsShoppingcart(e);
  },
  showAddShoppingcart: function (e) {
    app.showAddShoppingcart(e);
  },
  hideAddShoppingcart: function () {
    app.hideAddShoppingcart();
  },
  selectGoodsSubModel: function (e) {
    app.selectGoodsSubModel(e);
  },
  resetSelectCountPrice: function () {
    app.resetSelectCountPrice();
  },
  clickTostoreMinusButton: function (e) {
    app.clickTostoreMinusButton(e);
  },
  clickTostorePlusButton: function (e) {
    app.clickTostorePlusButton(e);
  },
  readyToPay: function () {
    app.readyToTostorePay();
  },
  getValidateTostore: function () {
    app.getValidateTostore();
  },
  goToShoppingCart: function () {
    app.goToShoppingCart();
  },
  stopPropagation: function () {
  },
  turnToSearchPage:function (e) {
    app.turnToSearchPage(e);
  },
  previewImage: function (e) {
    var dataset = e.currentTarget.dataset;
    app.previewImage({
      current : dataset.src,
      urls: dataset.previewImgarr,
    });
  },
  scrollPageTop: function () {
    app.pageScrollTo(0);
  },
  suspensionTurnToPage: function (e) {
    app.suspensionTurnToPage(e);
  },
  tapToLuckyWheel: function (e) {
    app.tapToLuckyWheel(e);
  },
  tapToGoldenEggs: function (e) {
    app.tapToGoldenEggs(e);
  },
  tapToScratchCard: function (e) {
    app.tapToScratchCard(e);
  },
  keywordList:{},
  bindSearchTextChange: function (e) {
    this.keywordList[e.currentTarget.dataset.compid] = e.detail.value;
  },
  // 文字组件跳到地图
  textToMap: function(e) {
    app.textToMap(e);
  },
  tapDynamicClassifyFunc: function(e){
    app.tapDynamicClassifyFunc(e);
  },
  // 跳转到视频详情
  turnToVideoDetail : function(e) {
    app.turnToVideoDetail(e);
  },
  // 单个视频组件播放视频
  startPlayVideo : function(e) {
    app.startPlayVideo(e);
  },
  // 视频播放报错
  videoError: function(e) {
    app.showModal({
      content: e.detail.errMsg
    });
  },
  // 视频项目播放事件
  videoProjectPlay: function(e){
    app.videoProjectPlay(e);
  },
  // 视频项目暂停事件
  videoProjectPause: function(e) {
    app.videoProjectPause(e);
  },
  // 跳转到资讯详情
  turnToNewsDetail: function (e) {
    app.turnToNewsDetail(e)
  },
  //切换资讯分类
  getNewsCateList: function (e) {
    app.getNewsCateList(e);
  },
  // 跳转多商家入驻
  franchiseeEnterHandler: function () {
    app.franchiseeEnterHandler();
  },
  // 跳转多商家代理推广合作联系
  franchiseeCooperationHandler: function () {
    app.franchiseeCooperationHandler();
  },
  //bbs评论
  showBbsReplyDialog: function(e){
    app.showBbsReplyDialog(e);
  },
  hideBbsReplyDialog: function(e){
    app.hideBbsReplyDialog(e);
  },
  popupWindowControlHandler: function(e){
    app.popupWindowControlHandler(e);
  },
  tapMaskClosePopupWindow: function(e){
    app.tapMaskClosePopupWindow(e);
  },
  //话题组件
  topicEleScrollFunc: function (e) {
    app.topicEleScrollFunc(e);
  },
  switchTopiclistOrderBy: function (e) {
    app.switchTopiclistOrderBy(e);
  },
  switchTopicCategory: function (e) {
    app.switchTopicCategory(e);
  },
  topicSearchInputAct: function (e) {
    app.topicSearchInputAct(e);
  },
  searchForTopicAct: function (e) {
    app.searchForTopicAct(e);
  },
  turnToTopicUserCenter: function (e) {
    app.turnToTopicUserCenter(e);
  },
  turnToTopicNotify: function (e) {
    app.turnToTopicNotify(e);
  },
  turnToTopicDetail: function (e) {
    app.turnToTopicDetail(e);
  },
  pageBackTopAct: function (e) {
    app.pageBackTopAct(e);
  },
  turnToTopicPublish: function (e) {
    app.turnToTopicPublish(e);
  },
  showTopicCommentBox: function (e) {
    app.showTopicCommentBox(e);
  },
  showTopicPhoneModal: function (e) {
    app.showTopicPhoneModal(e);
  },
  topicMakePhoneCall: function (e) {
    app.topicMakePhoneCall(e);
  },
  showTopicReplyComment: function (e) {
    app.showTopicReplyComment(e);
  },
  topicCommentReplyInput: function (e) {
    app.topicCommentReplyInput(e);
  },
  topicReplycommentSubmit: function (e) {
    app.topicReplycommentSubmit(e);
  },
  topicPerformLikeAct: function (e) {
    app.topicPerformLikeAct(e);
  },
  topicImgLoad: function (e) {
    app.topicImgLoad(e);
  },
  topicCommentReplyfocus:function (e) {
    app.topicCommentReplyfocus(e);
  },
  topicCommentReplyblur:function (e) {
    app.topicCommentReplyblur(e);
  },

  // 筛选组件 综合排序tab = 0
  sortByDefault: function (e) {
    app.sortByDefault(e);
  },
  // 筛选组件 按销量排序 tab = 1
  sortBySales: function (e) {
    app.sortBySales(e);
  },
  // 筛选组件 按价格排序 tab = 2
  sortByPrice: function (e) {
    app.sortByPrice(e);
  },
  // 筛选组件 展示侧边筛选
  filterList: function(e){
    app.filterList(e);
  },
  // 筛选侧栏确定
  filterConfirm: function(e){
    app.filterConfirm(e);
  },
  //侧边栏
  sidebarControlHandler: function (e) {
    app.sidebarControlHandler(e);
  },
  tapMaskCloseSidebar: function (e) {
    app.tapMaskCloseSidebar(e);
  },
  hideCompeletSidebar: function (e) {
    app.hideCompeletSidebar(e);
  },
  // 动画结束回调函数
  animationEnd: function(e){
    app.animationEnd(e);
  },
  //排号
  showTakeNumberWindow: function(e){
    app.showTakeNumberWindow(e);
  },
  hideTakeNumberWindow: function(e){
    app.hideTakeNumberWindow(e);
  },
  goToPreviewRowNumberOrder: function(e){
    app.goToPreviewRowNumberOrder(e);
  },
  selectRowNumberType: function(e){
    app.selectRowNumberType(e);
  },
  sureTakeNumber: function(e){
    app.sureTakeNumber(e);
  },
  goToCheckRowNunberDetail: function(e){
    app.goToCheckRowNunberDetail(e);
  },
  cancelCheckRowNunber: function(e){
    app.cancelCheckRowNunber(e);
  },
  rowNumberRefresh: function(e){
    app.rowNumberRefresh(e);
  },
  showCancelWindow: function (e) {
    app.showCancelWindow(e)
  },
  hideCancelWindow: function (e) {
    app.hideCancelWindow(e)
  },
  tapPluginLinkHandler: function(e){
    app.tapPluginLinkHandler(e);
  },
  tapGetWxCouponHandler: function (e){
    app.tapGetWxCouponHandler(e);
  },
  tapVipListHandler: function(){
    app.tapVipListHandler();
  },
  tapEventCommonHandler: function(e){
    app.tapEventCommonHandler(e);
  },
  goodsScanCodeHandler: function(){
    app.goodsScanCodeHandler();
  },
  getCarouselData: function(e) {
    let compid = e.currentTarget.dataset.compid;
    app._initialCarouselData(this, compid );
  },
  bbsScrollFuc: function(e){
    let compid = e.currentTarget.dataset.compid;
    app.bbsScrollFuc(compid);
  },
  getNewsList: function(e) {
    let compid = e.currentTarget.dataset.compid;
    app.getNewsList({ compid: compid });
  },
  getCommunityList: function (e) {
    let compid = e.currentTarget.dataset.compid;
    app.initialCommunityList(compid);
  },
  goodsFootPrint: function(){
    app.goodsFootPrint();
  },
  goodsFavorites: function(){
    app.goodsFavorites();
  },
  };
Page(pageData);
