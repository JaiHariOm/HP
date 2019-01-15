// Created by iWeb 3.0.4 local-build-20180730

setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function photocastSubscribe()
{photocastHelper("http://tengokukarano-goraikou.esy.es/GODSGARDEN/MEENAs_Diary/rss.xml");}
function onPageLoad()
{loadMozillaCSS('MEENAs_Diary_files/MEENAs_DiaryMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');detectBrowser();adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');fixAllIEPNGs('../Media/transparent.gif');fixupIECSS3Opacity('id3');Widget.onload();fixupAllIEPNGBGs();applyEffects()}
function onPageUnload()
{Widget.onunload();}
