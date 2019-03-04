// Created by iWeb 3.0.4 local-build-20190304

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:3,offset:new IWPoint(2.1213,2.1213),color:'#000000',opacity:0.940000}),shadow_0:new IWShadow({blurRadius:5,offset:new IWPoint(3.5355,3.5355),color:'#4d0b25',opacity:0.800000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('kokoperi_files/kokoperiMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');fixAllIEPNGs('Media/transparent.gif');applyEffects()}
