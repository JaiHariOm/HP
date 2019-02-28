// Created by iWeb 3.0.4 local-build-20190228

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:5,offset:new IWPoint(3.7094,-5.9363),color:'#4a8489',opacity:0.700000}),shadow_0:new IWShadow({blurRadius:2,offset:new IWPoint(-4.6839,-5.2020),color:'#89872c',opacity:0.370000}),reflection_0:new IWReflection({opacity:1.00,offset:1.00}),reflection_1:new IWReflection({opacity:0.69,offset:1.00}),reflection_2:new IWReflection({opacity:0.69,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id2');fixupIECSS3Opacity('id4');applyEffects()}
