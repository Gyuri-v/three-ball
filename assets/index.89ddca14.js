(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Io="143",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dh=0,na=1,fh=2,lc=1,ph=2,hs=3,zi=0,Wt=1,Jn=2,mh=1,Dn=0,Di=1,ia=2,sa=3,ra=4,gh=5,Ri=100,_h=101,xh=102,oa=103,aa=104,vh=200,yh=201,Mh=202,bh=203,cc=204,hc=205,wh=206,Sh=207,Eh=208,Th=209,Ah=210,Ch=0,Lh=1,Rh=2,go=3,Ph=4,Ih=5,Dh=6,Nh=7,uc=0,Fh=1,zh=2,gn=0,Oh=1,Bh=2,Uh=3,kh=4,Gh=5,dc=300,Oi=301,Bi=302,_o=303,xo=304,fr=306,Fn=1e3,Dt=1001,lr=1002,lt=1003,vo=1004,yo=1005,vt=1006,fc=1007,Wi=1008,Qn=1009,Vh=1010,Hh=1011,pc=1012,Wh=1013,jn=1014,Pn=1015,ms=1016,qh=1017,jh=1018,Ni=1020,Xh=1021,Yh=1022,Vt=1023,Kh=1024,Zh=1025,Kn=1026,Ui=1027,$h=1028,Jh=1029,Qh=1030,eu=1031,tu=1033,Tr=33776,Ar=33777,Cr=33778,Lr=33779,la=35840,ca=35841,ha=35842,ua=35843,nu=36196,da=37492,fa=37496,pa=37808,ma=37809,ga=37810,_a=37811,xa=37812,va=37813,ya=37814,Ma=37815,ba=37816,wa=37817,Sa=37818,Ea=37819,Ta=37820,Aa=37821,Ca=36492,gs=2300,ki=2301,Rr=2302,La=2400,Ra=2401,Pa=2402,iu=2500,su=1,mc=2,ei=3e3,Ge=3001,ru=3200,ou=3201,pr=0,au=1,pn="srgb",Xn="srgb-linear",Pr=7680,lu=519,Mo=35044,Ia="300 es",bo=1035;class ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Da=1234567;const ds=Math.PI/180,_s=180/Math.PI;function qt(){const c=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ct[c&255]+ct[c>>8&255]+ct[c>>16&255]+ct[c>>24&255]+"-"+ct[e&255]+ct[e>>8&255]+"-"+ct[e>>16&15|64]+ct[e>>24&255]+"-"+ct[t&63|128]+ct[t>>8&255]+"-"+ct[t>>16&255]+ct[t>>24&255]+ct[n&255]+ct[n>>8&255]+ct[n>>16&255]+ct[n>>24&255]).toLowerCase()}function ut(c,e,t){return Math.max(e,Math.min(t,c))}function Do(c,e){return(c%e+e)%e}function cu(c,e,t,n,i){return n+(c-e)*(i-n)/(t-e)}function hu(c,e,t){return c!==e?(t-c)/(e-c):0}function fs(c,e,t){return(1-t)*c+t*e}function uu(c,e,t,n){return fs(c,e,1-Math.exp(-t*n))}function du(c,e=1){return e-Math.abs(Do(c,e*2)-e)}function fu(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*(3-2*c))}function pu(c,e,t){return c<=e?0:c>=t?1:(c=(c-e)/(t-e),c*c*c*(c*(c*6-15)+10))}function mu(c,e){return c+Math.floor(Math.random()*(e-c+1))}function gu(c,e){return c+Math.random()*(e-c)}function _u(c){return c*(.5-Math.random())}function xu(c){c!==void 0&&(Da=c);let e=Da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vu(c){return c*ds}function yu(c){return c*_s}function wo(c){return(c&c-1)===0&&c!==0}function gc(c){return Math.pow(2,Math.ceil(Math.log(c)/Math.LN2))}function cr(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Mu(c,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),a=r(t/2),l=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),p=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":c.set(o*h,a*d,a*u,o*l);break;case"YZY":c.set(a*u,o*h,a*d,o*l);break;case"ZXZ":c.set(a*d,a*u,o*h,o*l);break;case"XZX":c.set(o*h,a*g,a*p,o*l);break;case"YXY":c.set(a*p,o*h,a*g,o*l);break;case"ZYZ":c.set(a*g,a*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bu(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function wu(c,e){switch(e.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}var No=Object.freeze({__proto__:null,DEG2RAD:ds,RAD2DEG:_s,generateUUID:qt,clamp:ut,euclideanModulo:Do,mapLinear:cu,inverseLerp:hu,lerp:fs,damp:uu,pingpong:du,smoothstep:fu,smootherstep:pu,randInt:mu,randFloat:gu,randFloatSpread:_u,seededRandom:xu,degToRad:vu,radToDeg:yu,isPowerOfTwo:wo,ceilPowerOfTwo:gc,floorPowerOfTwo:cr,setQuaternionFromProperEuler:Mu,normalize:wu,denormalize:bu});class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,a,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=a,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],m=i[0],f=i[3],_=i[6],x=i[1],w=i[4],b=i[7],v=i[2],S=i[5],R=i[8];return s[0]=r*m+o*x+a*v,s[3]=r*f+o*w+a*S,s[6]=r*_+o*b+a*R,s[1]=l*m+h*x+d*v,s[4]=l*f+h*w+d*S,s[7]=l*_+h*b+d*R,s[2]=u*m+p*x+g*v,s[5]=u*f+p*w+g*S,s[8]=u*_+p*b+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8];return t*r*h-t*o*l-n*s*h+n*o*a+i*s*l-i*r*a}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=h*r-o*l,u=o*a-h*s,p=l*s-r*a,g=t*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*l-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=u*m,e[4]=(h*t-i*a)*m,e[5]=(i*s-o*t)*m,e[6]=p*m,e[7]=(n*a-l*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-i*l,i*a,-i*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],r=i[3],o=i[6],a=i[1],l=i[4],h=i[7];return i[0]=t*s+n*a,i[3]=t*r+n*l,i[6]=t*o+n*h,i[1]=-n*s+t*a,i[4]=-n*r+t*l,i[7]=-n*o+t*h,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function _c(c){for(let e=c.length-1;e>=0;--e)if(c[e]>65535)return!0;return!1}function xs(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function Zn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function or(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Ir={[pn]:{[Xn]:Zn},[Xn]:{[pn]:or}},Ot={legacyMode:!0,get workingColorSpace(){return Xn},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,e,t){if(this.legacyMode||e===t||!e||!t)return c;if(Ir[e]&&Ir[e][t]!==void 0){const n=Ir[e][t];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,e){return this.convert(c,this.workingColorSpace,e)},toWorkingColorSpace:function(c,e){return this.convert(c,e,this.workingColorSpace)}},xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Bt={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function Dr(c,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?c+(e-c)*6*t:t<1/2?e:t<2/3?c+(e-c)*6*(2/3-t):c}function Is(c,e){return e.r=c.r,e.g=c.g,e.b=c.b,e}class we{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xn){return this.r=e,this.g=t,this.b=n,Ot.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xn){if(e=Do(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=Dr(r,s,e+1/3),this.g=Dr(r,s,e),this.b=Dr(r,s,e-1/3)}return Ot.toWorkingColorSpace(this,i),this}setStyle(e,t=pn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ot.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ot.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(a,l,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ot.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=pn){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Ot.fromWorkingColorSpace(Is(this,it),e),ut(it.r*255,0,255)<<16^ut(it.g*255,0,255)<<8^ut(it.b*255,0,255)<<0}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xn){Ot.fromWorkingColorSpace(Is(this,it),t);const n=it.r,i=it.g,s=it.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,l;const h=(o+r)/2;if(o===r)a=0,l=0;else{const d=r-o;switch(l=h<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return e.h=a,e.s=l,e.l=h,e}getRGB(e,t=Xn){return Ot.fromWorkingColorSpace(Is(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=pn){return Ot.fromWorkingColorSpace(Is(this,it),e),e!==pn?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Bt),Bt.h+=e,Bt.s+=t,Bt.l+=n,this.setHSL(Bt.h,Bt.s,Bt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bt),e.getHSL(Ps);const n=fs(Bt.h,Ps.h,t),i=fs(Bt.s,Ps.s,t),s=fs(Bt.l,Ps.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}we.NAMES=xc;let pi;class vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=xs("canvas")),pi.width=e.width,pi.height=e.height;const n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Zn(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yc{constructor(e=null){this.isSource=!0,this.uuid=qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(Nr(i[r].image)):s.push(Nr(i[r]))}else s=Nr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Nr(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?vc.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Su=0;class mt extends ri{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Dt,i=Dt,s=vt,r=Wi,o=Vt,a=Qn,l=1,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=qt(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fn:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fn:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=dc;class He{constructor(e=0,t=0,n=0,i=1){He.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const a=e.elements,l=a[0],h=a[4],d=a[8],u=a[1],p=a[5],g=a[9],m=a[2],f=a[6],_=a[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,b=(p+1)/2,v=(_+1)/2,S=(h+u)/4,R=(d+m)/4,y=(g+f)/4;return w>b&&w>v?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=S/n,s=R/n):b>v?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=S/i,s=y/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=R/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((f-g)*(f-g)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-m)/x,this.z=(u-h)/x,this.w=Math.acos((l+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ti extends ri{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mc extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eu extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],p=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=m;return}if(d!==m||a!==u||l!==p||h!==g){let f=1-o;const _=a*u+l*p+h*g+d*m,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const v=Math.sqrt(w),S=Math.atan2(v,_*x);f=Math.sin(f*S)/v,o=Math.sin(o*S)/v}const b=o*x;if(a=a*f+u*b,l=l*f+p*b,h=h*f+g*b,d=d*f+m*b,f===1-o){const v=1/Math.sqrt(a*a+l*l+h*h+d*d);a*=v,l*=v,h*=v,d*=v}}e[t]=a,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],a=n[i+1],l=n[i+2],h=n[i+3],d=s[r],u=s[r+1],p=s[r+2],g=s[r+3];return e[t]=o*g+h*d+a*p-l*u,e[t+1]=a*g+h*u+l*d-o*p,e[t+2]=l*g+h*p+o*u-a*d,e[t+3]=h*g-o*d-a*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,a=Math.sin,l=o(n/2),h=o(i/2),d=o(s/2),u=a(n/2),p=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-a)*p,this._y=(s-l)*p,this._z=(r-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-a)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-l)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(a+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(r-i)/p,this._x=(s+l)/p,this._y=(a+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,a=t._y,l=t._z,h=t._w;return this._x=n*h+r*o+i*l-s*a,this._y=i*h+r*a+s*o-n*l,this._z=s*h+r*l+n*a-i*o,this._w=r*h-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Na.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Na.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,a=e.w,l=a*t+r*i-o*n,h=a*n+o*t-s*i,d=a*i+s*n-r*t,u=-s*t-r*n-o*i;return this.x=l*a+u*-s+h*-o-d*-r,this.y=h*a+u*-r+d*-s-l*-o,this.z=d*a+u*-o+l*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,a=t.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fr=new N,Na=new _n;class qi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.length;a<l;a+=3){const h=e[a],d=e[a+1],u=e[a+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=e.count;a<l;a++){const h=e.getX(a),d=e.getY(a),u=e.getZ(a);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)On.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox),zr.applyMatrix4(e.matrixWorld),this.union(zr);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Ds.subVectors(this.max,es),mi.subVectors(e.a,es),gi.subVectors(e.b,es),_i.subVectors(e.c,es),yn.subVectors(gi,mi),Mn.subVectors(_i,gi),Bn.subVectors(mi,_i);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Bn.y,Bn.x,0];return!Or(t,mi,gi,_i,Ds)||(t=[1,0,0,0,1,0,0,0,1],!Or(t,mi,gi,_i,Ds))?!1:(Ns.crossVectors(yn,Mn),t=[Ns.x,Ns.y,Ns.z],Or(t,mi,gi,_i,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return On.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(On).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const nn=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,zr=new qi,mi=new N,gi=new N,_i=new N,yn=new N,Mn=new N,Bn=new N,es=new N,Ds=new N,Ns=new N,Un=new N;function Or(c,e,t,n,i){for(let s=0,r=c.length-3;s<=r;s+=3){Un.fromArray(c,s);const o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),a=e.dot(Un),l=t.dot(Un),h=n.dot(Un);if(Math.max(-Math.max(a,l,h),Math.min(a,l,h))>o)return!1}return!0}const Tu=new qi,Fa=new N,Fs=new N,Br=new N;class ji{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(Br.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?Fs.set(0,0,1).multiplyScalar(e.radius):Fs.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Fa.copy(e.center).add(Fs)),this.expandByPoint(Fa.copy(e.center).sub(Fs)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new N,Ur=new N,zs=new N,bn=new N,kr=new N,Os=new N,Gr=new N;class mr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.direction).multiplyScalar(t).add(this.origin),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ur.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),bn.copy(this.origin).sub(Ur);const s=e.distanceTo(t)*.5,r=-this.direction.dot(zs),o=bn.dot(this.direction),a=-bn.dot(zs),l=bn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*a-o,u=r*o-a,g=s*h,d>=0)if(u>=-g)if(u<=g){const m=1/h;d*=m,u*=m,p=d*(d+r*u+2*o)+u*(r*d+u+2*a)+l}else u=s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+l;else u=-s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+l;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-a),s),p=u*(u+2*a)+l):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-a),s),p=-d*d+u*(u+2*a)+l);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(zs).multiplyScalar(u).add(Ur),p}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,a;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),d>=0?(o=(e.min.z-u.z)*d,a=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,a=(e.min.z-u.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,i,s){kr.subVectors(t,e),Os.subVectors(n,e),Gr.crossVectors(kr,Os);let r=this.direction.dot(Gr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;bn.subVectors(this.origin,e);const a=o*this.direction.dot(Os.crossVectors(bn,Os));if(a<0)return null;const l=o*this.direction.dot(kr.cross(bn));if(l<0||a+l>r)return null;const h=-o*bn.dot(Gr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,a,l,h,d,u,p,g,m,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=r,_[9]=o,_[13]=a,_[2]=l,_[6]=h,_[10]=d,_[14]=u,_[3]=p,_[7]=g,_[11]=m,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),r=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,p=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=-a*d,t[8]=l,t[1]=p+g*l,t[5]=u-m*l,t[9]=-o*a,t[2]=m-u*l,t[6]=g+p*l,t[10]=r*a}else if(e.order==="YXZ"){const u=a*h,p=a*d,g=l*h,m=l*d;t[0]=u+m*o,t[4]=g*o-p,t[8]=r*l,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=m+u*o,t[10]=r*a}else if(e.order==="ZXY"){const u=a*h,p=a*d,g=l*h,m=l*d;t[0]=u-m*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=m-u*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){const u=r*h,p=r*d,g=o*h,m=o*d;t[0]=a*h,t[4]=g*l-p,t[8]=u*l+m,t[1]=a*d,t[5]=m*l+u,t[9]=p*l-g,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){const u=r*a,p=r*l,g=o*a,m=o*l;t[0]=a*h,t[4]=m-u*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*d+g,t[10]=u-m*d}else if(e.order==="XZY"){const u=r*a,p=r*l,g=o*a,m=o*l;t[0]=a*h,t[4]=-d,t[8]=l*h,t[1]=u*d+m,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Cu)}lookAt(e,t,n){const i=this.elements;return wt.subVectors(e,t),wt.lengthSq()===0&&(wt.z=1),wt.normalize(),wn.crossVectors(n,wt),wn.lengthSq()===0&&(Math.abs(n.z)===1?wt.x+=1e-4:wt.z+=1e-4,wt.normalize(),wn.crossVectors(n,wt)),wn.normalize(),Bs.crossVectors(wt,wn),i[0]=wn.x,i[4]=Bs.x,i[8]=wt.x,i[1]=wn.y,i[5]=Bs.y,i[9]=wt.y,i[2]=wn.z,i[6]=Bs.z,i[10]=wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],m=n[6],f=n[10],_=n[14],x=n[3],w=n[7],b=n[11],v=n[15],S=i[0],R=i[4],y=i[8],C=i[12],O=i[1],B=i[5],K=i[9],D=i[13],P=i[2],F=i[6],I=i[10],q=i[14],k=i[3],U=i[7],W=i[11],J=i[15];return s[0]=r*S+o*O+a*P+l*k,s[4]=r*R+o*B+a*F+l*U,s[8]=r*y+o*K+a*I+l*W,s[12]=r*C+o*D+a*q+l*J,s[1]=h*S+d*O+u*P+p*k,s[5]=h*R+d*B+u*F+p*U,s[9]=h*y+d*K+u*I+p*W,s[13]=h*C+d*D+u*q+p*J,s[2]=g*S+m*O+f*P+_*k,s[6]=g*R+m*B+f*F+_*U,s[10]=g*y+m*K+f*I+_*W,s[14]=g*C+m*D+f*q+_*J,s[3]=x*S+w*O+b*P+v*k,s[7]=x*R+w*B+b*F+v*U,s[11]=x*y+w*K+b*I+v*W,s[15]=x*C+w*D+b*q+v*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],h=e[2],d=e[6],u=e[10],p=e[14],g=e[3],m=e[7],f=e[11],_=e[15];return g*(+s*a*d-i*l*d-s*o*u+n*l*u+i*o*p-n*a*p)+m*(+t*a*p-t*l*u+s*r*u-i*r*p+i*l*h-s*a*h)+f*(+t*l*d-t*o*p-s*r*d+n*r*p+s*o*h-n*l*h)+_*(-i*o*h-t*a*d+t*o*u+i*r*d-n*r*u+n*a*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],h=e[8],d=e[9],u=e[10],p=e[11],g=e[12],m=e[13],f=e[14],_=e[15],x=d*f*l-m*u*l+m*a*p-o*f*p-d*a*_+o*u*_,w=g*u*l-h*f*l-g*a*p+r*f*p+h*a*_-r*u*_,b=h*m*l-g*d*l+g*o*p-r*m*p-h*o*_+r*d*_,v=g*d*a-h*m*a-g*o*u+r*m*u+h*o*f-r*d*f,S=t*x+n*w+i*b+s*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=x*R,e[1]=(m*u*s-d*f*s-m*i*p+n*f*p+d*i*_-n*u*_)*R,e[2]=(o*f*s-m*a*s+m*i*l-n*f*l-o*i*_+n*a*_)*R,e[3]=(d*a*s-o*u*s-d*i*l+n*u*l+o*i*p-n*a*p)*R,e[4]=w*R,e[5]=(h*f*s-g*u*s+g*i*p-t*f*p-h*i*_+t*u*_)*R,e[6]=(g*a*s-r*f*s-g*i*l+t*f*l+r*i*_-t*a*_)*R,e[7]=(r*u*s-h*a*s+h*i*l-t*u*l-r*i*p+t*a*p)*R,e[8]=b*R,e[9]=(g*d*s-h*m*s-g*n*p+t*m*p+h*n*_-t*d*_)*R,e[10]=(r*m*s-g*o*s+g*n*l-t*m*l-r*n*_+t*o*_)*R,e[11]=(h*o*s-r*d*s-h*n*l+t*d*l+r*n*p-t*o*p)*R,e[12]=v*R,e[13]=(h*m*i-g*d*i+g*n*u-t*m*u-h*n*f+t*d*f)*R,e[14]=(g*o*i-r*m*i-g*n*a+t*m*a+r*n*f-t*o*f)*R,e[15]=(r*d*i-h*o*i+h*n*a-t*d*a-r*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,a=e.z,l=s*r,h=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,h*o+n,h*a-i*r,0,l*a-i*o,h*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,a=t._w,l=s+s,h=r+r,d=o+o,u=s*l,p=s*h,g=s*d,m=r*h,f=r*d,_=o*d,x=a*l,w=a*h,b=a*d,v=n.x,S=n.y,R=n.z;return i[0]=(1-(m+_))*v,i[1]=(p+b)*v,i[2]=(g-w)*v,i[3]=0,i[4]=(p-b)*S,i[5]=(1-(u+_))*S,i[6]=(f+x)*S,i[7]=0,i[8]=(g+w)*R,i[9]=(f-x)*R,i[10]=(1-(u+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xi.set(i[0],i[1],i[2]).length();const r=xi.set(i[4],i[5],i[6]).length(),o=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ut.copy(this);const l=1/s,h=1/r,d=1/o;return Ut.elements[0]*=l,Ut.elements[1]*=l,Ut.elements[2]*=l,Ut.elements[4]*=h,Ut.elements[5]*=h,Ut.elements[6]*=h,Ut.elements[8]*=d,Ut.elements[9]*=d,Ut.elements[10]*=d,t.setFromRotationMatrix(Ut),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,a=2*s/(t-e),l=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,a=1/(t-e),l=1/(n-i),h=1/(r-s),d=(t+e)*a,u=(n+i)*l,p=(r+s)*h;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new N,Ut=new Fe,Au=new N(0,0,0),Cu=new N(1,1,1),wn=new N,Bs=new N,wt=new N,za=new Fe,Oa=new _n;class Ss{constructor(e=0,t=0,n=0,i=Ss.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return za.makeRotationFromQuaternion(e),this.setFromRotationMatrix(za,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ss.DefaultOrder="XYZ";Ss.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lu=0;const Ba=new N,vi=new _n,rn=new Fe,Us=new N,ts=new N,Ru=new N,Pu=new _n,Ua=new N(1,0,0),ka=new N(0,1,0),Ga=new N(0,0,1),Iu={type:"added"},Va={type:"removed"};class et extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DefaultUp.clone();const e=new N,t=new Ss,n=new _n,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Nt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=et.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Ua,e)}rotateY(e){return this.rotateOnAxis(ka,e)}rotateZ(e){return this.rotateOnAxis(Ga,e)}translateOnAxis(e,t){return Ba.copy(e).applyQuaternion(this.quaternion),this.position.add(Ba.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ua,e)}translateY(e){return this.translateOnAxis(ka,e)}translateZ(e){return this.translateOnAxis(Ga,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Us.copy(e):Us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(ts,Us,this.up):rn.lookAt(Us,ts,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(rn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Iu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Va)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Va)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Ru),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(e)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let l=0,h=a.length;l<h;l++){const d=a[l];s(e.shapes,d)}else s(e.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){const o=r(e.geometries),a=r(e.materials),l=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const a=[];for(const l in o){const h=o[l];delete h.metadata,a.push(h)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DefaultUp=new N(0,1,0);et.DefaultMatrixAutoUpdate=!0;const kt=new N,on=new N,Vr=new N,an=new N,yi=new N,Mi=new N,Ha=new N,Hr=new N,Wr=new N,qr=new N;class mn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kt.subVectors(e,t),i.cross(kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kt.subVectors(i,t),on.subVectors(n,t),Vr.subVectors(e,t);const r=kt.dot(kt),o=kt.dot(on),a=kt.dot(Vr),l=on.dot(on),h=on.dot(Vr),d=r*l-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,p=(l*a-o*h)*u,g=(r*h-o*a)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,an),an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(e,t,n,i,s,r,o,a){return this.getBarycoord(e,t,n,i,an),a.set(0,0),a.addScaledVector(s,an.x),a.addScaledVector(r,an.y),a.addScaledVector(o,an.z),a}static isFrontFacing(e,t,n,i){return kt.subVectors(n,t),on.subVectors(e,t),kt.cross(on).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),kt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return mn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;yi.subVectors(i,n),Mi.subVectors(s,n),Hr.subVectors(e,n);const a=yi.dot(Hr),l=Mi.dot(Hr);if(a<=0&&l<=0)return t.copy(n);Wr.subVectors(e,i);const h=yi.dot(Wr),d=Mi.dot(Wr);if(h>=0&&d<=h)return t.copy(i);const u=a*d-h*l;if(u<=0&&a>=0&&h<=0)return r=a/(a-h),t.copy(n).addScaledVector(yi,r);qr.subVectors(e,s);const p=yi.dot(qr),g=Mi.dot(qr);if(g>=0&&p<=g)return t.copy(s);const m=p*l-a*g;if(m<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Mi,o);const f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return Ha.subVectors(s,i),o=(d-h)/(d-h+(p-g)),t.copy(i).addScaledVector(Ha,o);const _=1/(f+m+u);return r=m*_,o=u*_,t.copy(n).addScaledVector(yi,r).addScaledVector(Mi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Du=0;class jt extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=Di,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=cc,this.blendDst=hc,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===mh;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $e=new N,ks=new ye;class Et{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new we),t[n++]=r.r,t[n++]=r.g,t[n++]=r.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new ye),t[n++]=r.x,t[n++]=r.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new N),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let r=e[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new He),t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=r.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix3(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyMatrix4(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.applyNormalMatrix(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$e.fromBufferAttribute(this,t),$e.transformDirection(e),this.setXYZ(t,$e.x,$e.y,$e.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class bc extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wc extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const It=new Fe,jr=new et,bi=new N,St=new qi,ns=new qi,ot=new N;class Yt extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?wc:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return It.makeRotationFromQuaternion(e),this.applyMatrix4(It),this}rotateX(e){return It.makeRotationX(e),this.applyMatrix4(It),this}rotateY(e){return It.makeRotationY(e),this.applyMatrix4(It),this}rotateZ(e){return It.makeRotationZ(e),this.applyMatrix4(It),this}translate(e,t,n){return It.makeTranslation(e,t,n),this.applyMatrix4(It),this}scale(e,t,n){return It.makeScale(e,t,n),this.applyMatrix4(It),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];St.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(ot.addVectors(St.min,ns.min),St.expandByPoint(ot),ot.addVectors(St.max,ns.max),St.expandByPoint(ot)):(St.expandByPoint(ns.min),St.expandByPoint(ns.max))}St.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],a=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ot.fromBufferAttribute(o,l),a&&(bi.fromBufferAttribute(e,l),ot.add(bi)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,l=[],h=[];for(let O=0;O<o;O++)l[O]=new N,h[O]=new N;const d=new N,u=new N,p=new N,g=new ye,m=new ye,f=new ye,_=new N,x=new N;function w(O,B,K){d.fromArray(i,O*3),u.fromArray(i,B*3),p.fromArray(i,K*3),g.fromArray(r,O*2),m.fromArray(r,B*2),f.fromArray(r,K*2),u.sub(d),p.sub(d),m.sub(g),f.sub(g);const D=1/(m.x*f.y-f.x*m.y);!isFinite(D)||(_.copy(u).multiplyScalar(f.y).addScaledVector(p,-m.y).multiplyScalar(D),x.copy(p).multiplyScalar(m.x).addScaledVector(u,-f.x).multiplyScalar(D),l[O].add(_),l[B].add(_),l[K].add(_),h[O].add(x),h[B].add(x),h[K].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let O=0,B=b.length;O<B;++O){const K=b[O],D=K.start,P=K.count;for(let F=D,I=D+P;F<I;F+=3)w(n[F+0],n[F+1],n[F+2])}const v=new N,S=new N,R=new N,y=new N;function C(O){R.fromArray(s,O*3),y.copy(R);const B=l[O];v.copy(B),v.sub(R.multiplyScalar(R.dot(B))).normalize(),S.crossVectors(y,B);const D=S.dot(h[O])<0?-1:1;a[O*4]=v.x,a[O*4+1]=v.y,a[O*4+2]=v.z,a[O*4+3]=D}for(let O=0,B=b.length;O<B;++O){const K=b[O],D=K.start,P=K.count;for(let F=D,I=D+P;F<I;F+=3)C(n[F+0]),C(n[F+1]),C(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new N,s=new N,r=new N,o=new N,a=new N,l=new N,h=new N,d=new N;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),m=e.getX(u+1),f=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,f),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,f),o.add(h),a.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const r=n[i].array,o=e.attributes[i],a=o.array,l=o.itemSize*t,h=Math.min(a.length,r.length-l);for(let d=0,u=l;d<h;d++,u++)r[u]=a[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(o,a){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(a.length*h);let p=0,g=0;for(let m=0,f=a.length;m<f;m++){o.isInterleavedBufferAttribute?p=a[m]*o.data.stride+o.offset:p=a[m]*h;for(let _=0;_<h;_++)u[g++]=l[p++]}return new Et(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],l=e(a,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const a=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=e(u,n);a.push(p)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const l in a)a[l]!==void 0&&(e[l]=a[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const a in n){const l=n[a];e.data.attributes[a]=l.toJSON(e.data)}const i={};let s=!1;for(const a in this.morphAttributes){const l=this.morphAttributes[a],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(i[a]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let l=0,h=r.length;l<h;l++){const d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=e.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new Fe,wi=new mr,Xr=new ji,Sn=new N,En=new N,Tn=new N,Yr=new N,Kr=new N,Zr=new N,Gs=new N,Vs=new N,Hs=new N,Ws=new ye,qs=new ye,js=new ye,$r=new N,Xs=new N;class Ft extends et{constructor(e=new Yt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(s),e.ray.intersectsSphere(Xr)===!1)||(Wa.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Wa),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,l=n.morphAttributes.position,h=n.morphTargetsRelative,d=n.attributes.uv,u=n.attributes.uv2,p=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],x=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(o.count,Math.min(_.start+_.count,g.start+g.count));for(let v=w,S=b;v<S;v+=3){const R=o.getX(v),y=o.getX(v+1),C=o.getX(v+2);r=Ys(this,x,e,wi,a,l,h,d,u,R,y,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let _=m,x=f;_<x;_+=3){const w=o.getX(_),b=o.getX(_+1),v=o.getX(_+2);r=Ys(this,i,e,wi,a,l,h,d,u,w,b,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let m=0,f=p.length;m<f;m++){const _=p[m],x=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let v=w,S=b;v<S;v+=3){const R=v,y=v+1,C=v+2;r=Ys(this,x,e,wi,a,l,h,d,u,R,y,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const m=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=m,x=f;_<x;_+=3){const w=_,b=_+1,v=_+2;r=Ys(this,i,e,wi,a,l,h,d,u,w,b,v),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Fu(c,e,t,n,i,s,r,o){let a;if(e.side===Wt?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,e.side!==Jn,o),a===null)return null;Xs.copy(o),Xs.applyMatrix4(c.matrixWorld);const l=t.ray.origin.distanceTo(Xs);return l<t.near||l>t.far?null:{distance:l,point:Xs.clone(),object:c}}function Ys(c,e,t,n,i,s,r,o,a,l,h,d){Sn.fromBufferAttribute(i,l),En.fromBufferAttribute(i,h),Tn.fromBufferAttribute(i,d);const u=c.morphTargetInfluences;if(s&&u){Gs.set(0,0,0),Vs.set(0,0,0),Hs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const f=u[g],_=s[g];f!==0&&(Yr.fromBufferAttribute(_,l),Kr.fromBufferAttribute(_,h),Zr.fromBufferAttribute(_,d),r?(Gs.addScaledVector(Yr,f),Vs.addScaledVector(Kr,f),Hs.addScaledVector(Zr,f)):(Gs.addScaledVector(Yr.sub(Sn),f),Vs.addScaledVector(Kr.sub(En),f),Hs.addScaledVector(Zr.sub(Tn),f)))}Sn.add(Gs),En.add(Vs),Tn.add(Hs)}c.isSkinnedMesh&&(c.boneTransform(l,Sn),c.boneTransform(h,En),c.boneTransform(d,Tn));const p=Fu(c,e,t,n,Sn,En,Tn,$r);if(p){o&&(Ws.fromBufferAttribute(o,l),qs.fromBufferAttribute(o,h),js.fromBufferAttribute(o,d),p.uv=mn.getUV($r,Sn,En,Tn,Ws,qs,js,new ye)),a&&(Ws.fromBufferAttribute(a,l),qs.fromBufferAttribute(a,h),js.fromBufferAttribute(a,d),p.uv2=mn.getUV($r,Sn,En,Tn,Ws,qs,js,new ye));const g={a:l,b:h,c:d,normal:new N,materialIndex:0};mn.getNormal(Sn,En,Tn,g.normal),p.face=g}return p}class Xi extends Yt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(d,2));function g(m,f,_,x,w,b,v,S,R,y,C){const O=b/R,B=v/y,K=b/2,D=v/2,P=S/2,F=R+1,I=y+1;let q=0,k=0;const U=new N;for(let W=0;W<I;W++){const J=W*B-D;for(let H=0;H<F;H++){const ee=H*O-K;U[m]=ee*x,U[f]=J*w,U[_]=P,l.push(U.x,U.y,U.z),U[m]=0,U[f]=0,U[_]=S>0?1:-1,h.push(U.x,U.y,U.z),d.push(H/R),d.push(1-W/y),q+=1}}for(let W=0;W<y;W++)for(let J=0;J<R;J++){const H=u+J+F*W,ee=u+J+F*(W+1),ue=u+(J+1)+F*(W+1),ge=u+(J+1)+F*W;a.push(H,ee,ge),a.push(ee,ue,ge),k+=6}o.addGroup(p,k,C),p+=k,u+=q}}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(c){const e={};for(const t in c){e[t]={};for(const n in c[t]){const i=c[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ht(c){const e={};for(let t=0;t<c.length;t++){const n=Gi(c[t]);for(const i in n)e[i]=n[i]}return e}function zu(c){const e=[];for(let t=0;t<c.length;t++)e.push(c[t].clone());return e}const Ou={clone:Gi,merge:ht};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=Uu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sc extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pt extends Sc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ds*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,t-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=90,Ei=1;class ku extends et{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new pt(Si,Ei,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new N(1,0,0)),this.add(i);const s=new pt(Si,Ei,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const r=new pt(Si,Ei,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new N(0,1,0)),this.add(r);const o=new pt(Si,Ei,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new N(0,-1,0)),this.add(o);const a=new pt(Si,Ei,e,t);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new N(0,0,1)),this.add(a);const l=new pt(Si,Ei,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=gn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,a),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class zo extends mt{constructor(e,t,n,i,s,r,o,a,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,i,s,r,o,a,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gu extends ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new zo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Xi(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Dn});s.uniforms.tEquirect.value=t;const r=new Ft(i,s),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=vt),new ku(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const Jr=new N,Vu=new N,Hu=new Nt;class Gn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Jr.subVectors(n,t).cross(Vu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Jr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hu.getNormalMatrix(e),i=this.coplanarPoint(Jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new ji,Ks=new N;class Oo{constructor(e=new Gn,t=new Gn,n=new Gn,i=new Gn,s=new Gn,r=new Gn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7],u=n[8],p=n[9],g=n[10],m=n[11],f=n[12],_=n[13],x=n[14],w=n[15];return t[0].setComponents(o-i,d-a,m-u,w-f).normalize(),t[1].setComponents(o+i,d+a,m+u,w+f).normalize(),t[2].setComponents(o+s,d+l,m+p,w+_).normalize(),t[3].setComponents(o-s,d-l,m-p,w-_).normalize(),t[4].setComponents(o-r,d-h,m-g,w-x).normalize(),t[5].setComponents(o+r,d+h,m+g,w+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ks.x=i.normal.x>0?e.max.x:e.min.x,Ks.y=i.normal.y>0?e.max.y:e.min.y,Ks.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let c=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=c.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=c.requestAnimationFrame(i),e=!0)},stop:function(){c.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){c=s}}}function Wu(c,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,p=c.createBuffer();c.bindBuffer(h,p),c.bufferData(h,d,u),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const u=h.array,p=h.updateRange;c.bindBuffer(d,l),p.count===-1?c.bufferSubData(d,0,u):(t?c.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):c.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1)}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(c.deleteBuffer(h.buffer),n.delete(l))}function a(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,i(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:r,remove:o,update:a}}class Bo extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),l=o+1,h=a+1,d=e/o,u=t/a,p=[],g=[],m=[],f=[];for(let _=0;_<h;_++){const x=_*u-r;for(let w=0;w<l;w++){const b=w*d-s;g.push(b,-x,0),m.push(0,0,1),f.push(w/o),f.push(1-_/a)}}for(let _=0;_<a;_++)for(let x=0;x<o;x++){const w=x+l*_,b=x+l*(_+1),v=x+1+l*(_+1),S=x+1+l*_;p.push(w,b,S),p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(f,2))}static fromJSON(e){return new Bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var qu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ku=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$u="vec3 transformed = vec3( position );",Ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Ld=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Id=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,rf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,wf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sf=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ef=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Tf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nf=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Ff=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,zf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Of=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Bf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Uf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Gf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Vf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wf=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Xf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,op=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:qu,alphamap_pars_fragment:ju,alphatest_fragment:Xu,alphatest_pars_fragment:Yu,aomap_fragment:Ku,aomap_pars_fragment:Zu,begin_vertex:$u,beginnormal_vertex:Ju,bsdfs:Qu,iridescence_fragment:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:sd,clipping_planes_vertex:rd,color_fragment:od,color_pars_fragment:ad,color_pars_vertex:ld,color_vertex:cd,common:hd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:dd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,encodings_fragment:_d,encodings_pars_fragment:xd,envmap_fragment:vd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Md,envmap_pars_vertex:bd,envmap_physical_pars_fragment:Dd,envmap_vertex:wd,fog_vertex:Sd,fog_pars_vertex:Ed,fog_fragment:Td,fog_pars_fragment:Ad,gradientmap_pars_fragment:Cd,lightmap_fragment:Ld,lightmap_pars_fragment:Rd,lights_lambert_vertex:Pd,lights_pars_begin:Id,lights_toon_fragment:Nd,lights_toon_pars_fragment:Fd,lights_phong_fragment:zd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:Ud,lights_fragment_begin:kd,lights_fragment_maps:Gd,lights_fragment_end:Vd,logdepthbuf_fragment:Hd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:jd,map_fragment:Xd,map_pars_fragment:Yd,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Qd,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:of,normal_pars_vertex:af,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,output_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:_f,dithering_fragment:xf,dithering_pars_fragment:vf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:Mf,shadowmap_pars_fragment:bf,shadowmap_pars_vertex:wf,shadowmap_vertex:Sf,shadowmask_pars_fragment:Ef,skinbase_vertex:Tf,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Lf,specularmap_fragment:Rf,specularmap_pars_fragment:Pf,tonemapping_fragment:If,tonemapping_pars_fragment:Df,transmission_fragment:Nf,transmission_pars_fragment:Ff,uv_pars_fragment:zf,uv_pars_vertex:Of,uv_vertex:Bf,uv2_pars_fragment:Uf,uv2_pars_vertex:kf,uv2_vertex:Gf,worldpos_vertex:Vf,background_vert:Hf,background_frag:Wf,cube_vert:qf,cube_frag:jf,depth_vert:Xf,depth_frag:Yf,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:$f,equirect_frag:Jf,linedashed_vert:Qf,linedashed_frag:ep,meshbasic_vert:tp,meshbasic_frag:np,meshlambert_vert:ip,meshlambert_frag:sp,meshmatcap_vert:rp,meshmatcap_frag:op,meshnormal_vert:ap,meshnormal_frag:lp,meshphong_vert:cp,meshphong_frag:hp,meshphysical_vert:up,meshphysical_frag:dp,meshtoon_vert:fp,meshtoon_frag:pp,points_vert:mp,points_frag:gp,shadow_vert:_p,shadow_frag:xp,sprite_vert:vp,sprite_frag:yp},re={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Nt},uv2Transform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}}},Qt={basic:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:ht([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:ht([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:ht([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new we(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:ht([re.points,re.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:ht([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:ht([re.common,re.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:ht([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:ht([re.sprite,re.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},cube:{uniforms:ht([re.envmap,{opacity:{value:1}}]),vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:ht([re.common,re.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:ht([re.lights,re.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Qt.physical={uniforms:ht([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ye(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};function Mp(c,e,t,n,i,s){const r=new we(0);let o=i===!0?0:1,a,l,h=null,d=0,u=null;function p(m,f){let _=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=e.get(x));const w=c.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(x=null),x===null?g(r,o):x&&x.isColor&&(g(x,1),_=!0),(c.autoClear||_)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),x&&(x.isCubeTexture||x.mapping===fr)?(l===void 0&&(l=new Ft(new Xi(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Gi(Qt.cube.uniforms),vertexShader:Qt.cube.vertexShader,fragmentShader:Qt.cube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(h!==x||d!==x.version||u!==c.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=c.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new Ft(new Bo(2,2),new ni({name:"BackgroundMaterial",uniforms:Gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==c.toneMapping)&&(a.material.needsUpdate=!0,h=x,d=x.version,u=c.toneMapping),a.layers.enableAll(),m.unshift(a,a.geometry,a.material,0,0,null))}function g(m,f){t.buffers.color.setClear(m.r,m.g,m.b,f,s)}return{getClearColor:function(){return r},setClearColor:function(m,f=1){r.set(m),o=f,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(r,o)},render:p}}function bp(c,e,t,n){const i=c.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=f(null);let l=a,h=!1;function d(P,F,I,q,k){let U=!1;if(r){const W=m(q,I,F);l!==W&&(l=W,p(l.object)),U=_(P,q,I,k),U&&x(P,q,I,k)}else{const W=F.wireframe===!0;(l.geometry!==q.id||l.program!==I.id||l.wireframe!==W)&&(l.geometry=q.id,l.program=I.id,l.wireframe=W,U=!0)}k!==null&&t.update(k,34963),(U||h)&&(h=!1,y(P,F,I,q),k!==null&&c.bindBuffer(34963,t.get(k).buffer))}function u(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function p(P){return n.isWebGL2?c.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?c.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function m(P,F,I){const q=I.wireframe===!0;let k=o[P.id];k===void 0&&(k={},o[P.id]=k);let U=k[F.id];U===void 0&&(U={},k[F.id]=U);let W=U[q];return W===void 0&&(W=f(u()),U[q]=W),W}function f(P){const F=[],I=[],q=[];for(let k=0;k<i;k++)F[k]=0,I[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:I,attributeDivisors:q,object:P,attributes:{},index:null}}function _(P,F,I,q){const k=l.attributes,U=F.attributes;let W=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){const ue=k[H];let ge=U[H];if(ge===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor)),ue===void 0||ue.attribute!==ge||ge&&ue.data!==ge.data)return!0;W++}return l.attributesNum!==W||l.index!==q}function x(P,F,I,q){const k={},U=F.attributes;let W=0;const J=I.getAttributes();for(const H in J)if(J[H].location>=0){let ue=U[H];ue===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(ue=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(ue=P.instanceColor));const ge={};ge.attribute=ue,ue&&ue.data&&(ge.data=ue.data),k[H]=ge,W++}l.attributes=k,l.attributesNum=W,l.index=q}function w(){const P=l.newAttributes;for(let F=0,I=P.length;F<I;F++)P[F]=0}function b(P){v(P,0)}function v(P,F){const I=l.newAttributes,q=l.enabledAttributes,k=l.attributeDivisors;I[P]=1,q[P]===0&&(c.enableVertexAttribArray(P),q[P]=1),k[P]!==F&&((n.isWebGL2?c:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),k[P]=F)}function S(){const P=l.newAttributes,F=l.enabledAttributes;for(let I=0,q=F.length;I<q;I++)F[I]!==P[I]&&(c.disableVertexAttribArray(I),F[I]=0)}function R(P,F,I,q,k,U){n.isWebGL2===!0&&(I===5124||I===5125)?c.vertexAttribIPointer(P,F,I,k,U):c.vertexAttribPointer(P,F,I,q,k,U)}function y(P,F,I,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const k=q.attributes,U=I.getAttributes(),W=F.defaultAttributeValues;for(const J in U){const H=U[J];if(H.location>=0){let ee=k[J];if(ee===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){const ue=ee.normalized,ge=ee.itemSize,Z=t.get(ee);if(Z===void 0)continue;const Pe=Z.buffer,_e=Z.type,Me=Z.bytesPerElement;if(ee.isInterleavedBufferAttribute){const pe=ee.data,Be=pe.stride,Ee=ee.offset;if(pe.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)v(H.location+me,pe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let me=0;me<H.locationSize;me++)b(H.location+me);c.bindBuffer(34962,Pe);for(let me=0;me<H.locationSize;me++)R(H.location+me,ge/H.locationSize,_e,ue,Be*Me,(Ee+ge/H.locationSize*me)*Me)}else{if(ee.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)v(H.location+pe,ee.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe);c.bindBuffer(34962,Pe);for(let pe=0;pe<H.locationSize;pe++)R(H.location+pe,ge/H.locationSize,_e,ue,ge*Me,ge/H.locationSize*pe*Me)}}else if(W!==void 0){const ue=W[J];if(ue!==void 0)switch(ue.length){case 2:c.vertexAttrib2fv(H.location,ue);break;case 3:c.vertexAttrib3fv(H.location,ue);break;case 4:c.vertexAttrib4fv(H.location,ue);break;default:c.vertexAttrib1fv(H.location,ue)}}}}S()}function C(){K();for(const P in o){const F=o[P];for(const I in F){const q=F[I];for(const k in q)g(q[k].object),delete q[k];delete F[I]}delete o[P]}}function O(P){if(o[P.id]===void 0)return;const F=o[P.id];for(const I in F){const q=F[I];for(const k in q)g(q[k].object),delete q[k];delete F[I]}delete o[P.id]}function B(P){for(const F in o){const I=o[F];if(I[P.id]===void 0)continue;const q=I[P.id];for(const k in q)g(q[k].object),delete q[k];delete I[P.id]}}function K(){D(),h=!0,l!==a&&(l=a,p(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:C,releaseStatesOfGeometry:O,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:b,disableUnusedAttributes:S}}function wp(c,e,t,n){const i=n.isWebGL2;let s;function r(l){s=l}function o(l,h){c.drawArrays(s,l,h),t.update(h,s,1)}function a(l,h,d){if(d===0)return;let u,p;if(i)u=c,p="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,l,h,d),t.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function Sp(c,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=c.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=c.getParameter(34930),u=c.getParameter(35660),p=c.getParameter(3379),g=c.getParameter(34076),m=c.getParameter(34921),f=c.getParameter(36347),_=c.getParameter(36348),x=c.getParameter(36349),w=u>0,b=r||e.has("OES_texture_float"),v=w&&b,S=r?c.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:S}}function Ep(c){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Gn,o=new Nt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u,p){const g=d.length!==0||u||n!==0||i;return i=u,t=h(d,p,0),n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,u,p){const g=d.clippingPlanes,m=d.clipIntersection,f=d.clipShadows,_=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?h(null):l();else{const x=s?0:n,w=x*4;let b=_.clippingState||null;a.value=b,b=h(g,u,w,p);for(let v=0;v!==w;++v)b[v]=t[v];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==t&&(a.value=t,a.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,p,g){const m=d!==null?d.length:0;let f=null;if(m!==0){if(f=a.value,g!==!0||f===null){const _=p+m*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<_)&&(f=new Float32Array(_));for(let w=0,b=p;w!==m;++w,b+=4)r.copy(d[w]).applyMatrix4(x,o),r.normal.toArray(f,b),f[b+3]=r.constant}a.value=f,a.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,f}}function Tp(c){let e=new WeakMap;function t(r,o){return o===_o?r.mapping=Oi:o===xo&&(r.mapping=Bi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===_o||o===xo)if(e.has(r)){const a=e.get(r).texture;return t(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const l=new Gu(a.height/2);return l.fromEquirectangularTexture(c,r),e.set(r,l),r.addEventListener("dispose",i),t(l.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=e.get(o);a!==void 0&&(e.delete(o),a.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Uo extends Sc{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=h*this.view.offsetY,a=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,qa=[.125,.215,.35,.446,.526,.582],Wn=20,Qr=new Uo,ja=new we;let eo=null;const Vn=(1+Math.sqrt(5))/2,Ai=1/Vn,Xa=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Vn,Ai),new N(0,Vn,-Ai),new N(Ai,0,Vn),new N(-Ai,0,Vn),new N(Vn,Ai,0),new N(-Vn,Ai,0)];class Ya{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){eo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$a(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eo),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vt,minFilter:vt,generateMipmaps:!1,type:ms,format:Vt,encoding:ei,depthBuffer:!1},i=Ka(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ka(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(s)),this._blurMaterial=Cp(s,e,t)}return i}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,i){const o=new pt(90,1,t,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ja),h.toneMapping=gn,h.autoClear=!1;const p=new In({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),g=new Ft(new Xi,p);let m=!1;const f=e.background;f?f.isColor&&(p.color.copy(f),e.background=null,m=!0):(p.color.copy(ja),m=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(o.up.set(0,a[_],0),o.lookAt(l[_],0,0)):x===1?(o.up.set(0,0,a[_]),o.lookAt(0,l[_],0)):(o.up.set(0,a[_],0),o.lookAt(0,0,l[_]));const w=this._cubeSize;Zs(i,x*w,_>2?w:0,w,w),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Oi||e.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$a()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Za());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ft(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const a=this._cubeSize;Zs(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Xa[(i-1)%Xa.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ft(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wn-1),m=s/g,f=isFinite(s)?1+Math.floor(h*m):Wn;f>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Wn}`);const _=[];let x=0;for(let R=0;R<Wn;++R){const y=R/m,C=Math.exp(-y*y/2);_.push(C),R===0?x+=C:R<f&&(x+=2*C)}for(let R=0;R<_.length;R++)_[R]=_[R]/x;u.envMap.value=e.texture,u.samples.value=f,u.weights.value=_,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:w}=this;u.dTheta.value=g,u.mipInt.value=w-n;const b=this._sizeLods[i],v=3*b*(i>w-Pi?i-w+Pi:0),S=4*(this._cubeSize-b);Zs(t,v,S,3*b,2*b),a.setRenderTarget(t),a.render(d,Qr)}}function Ap(c){const e=[],t=[],n=[];let i=c;const s=c-Pi+1+qa.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let a=1/o;r>c-Pi?a=qa[r-c+Pi-1]:r===0&&(a=0),n.push(a);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,m=3,f=2,_=1,x=new Float32Array(m*g*p),w=new Float32Array(f*g*p),b=new Float32Array(_*g*p);for(let S=0;S<p;S++){const R=S%3*2/3-1,y=S>2?0:-1,C=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];x.set(C,m*g*S),w.set(u,f*g*S);const O=[S,S,S,S,S,S];b.set(O,_*g*S)}const v=new Yt;v.setAttribute("position",new Et(x,m)),v.setAttribute("uv",new Et(w,f)),v.setAttribute("faceIndex",new Et(b,_)),e.push(v),i>Pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ka(c,e,t){const n=new ti(c,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zs(c,e,t,n,i){c.viewport.set(e,t,n,i),c.scissor.set(e,t,n,i)}function Cp(c,e,t){const n=new Float32Array(Wn),i=new N(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Za(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function $a(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ko(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ko(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(c){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const a=o.mapping,l=a===_o||a===xo,h=a===Oi||a===Bi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ya(c)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new Ya(c));const u=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let a=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&a++;return a===l}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Rp(c){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pp(c,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function a(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const p=d.morphAttributes;for(const g in p){const m=p[g];for(let f=0,_=m.length;f<_;f++)e.update(m[f],34962)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let m=0;if(p!==null){const x=p.array;m=p.version;for(let w=0,b=x.length;w<b;w+=3){const v=x[w+0],S=x[w+1],R=x[w+2];u.push(v,S,S,R,R,v)}}else{const x=g.array;m=g.version;for(let w=0,b=x.length/3-1;w<b;w+=3){const v=w+0,S=w+1,R=w+2;u.push(v,S,S,R,R,v)}}const f=new(_c(u)?wc:bc)(u,1);f.version=m;const _=s.get(d);_&&e.remove(_),s.set(d,f)}function h(d){const u=s.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:h}}function Ip(c,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function h(u,p){c.drawElements(s,p,o,u*a),t.update(p,s,1)}function d(u,p,g){if(g===0)return;let m,f;if(i)m=c,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,p,o,u*a,g),t.update(p,s,g)}this.setMode=r,this.setIndex=l,this.render=h,this.renderInstances=d}function Dp(c){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Np(c,e){return c[0]-e[0]}function Fp(c,e){return Math.abs(e[1])-Math.abs(c[1])}function to(c,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),c.divideScalar(t)}function zp(c,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new He,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,h,d,u){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=m!==void 0?m.length:0;let _=s.get(h);if(_===void 0||_.count!==f){let I=function(){P.dispose(),s.delete(h),h.removeEventListener("dispose",I)};var g=I;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let O=0;b===!0&&(O=1),v===!0&&(O=2),S===!0&&(O=3);let B=h.attributes.position.count*O,K=1;B>e.maxTextureSize&&(K=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const D=new Float32Array(B*K*4*f),P=new Mc(D,B,K,f);P.type=Pn,P.needsUpdate=!0;const F=O*4;for(let q=0;q<f;q++){const k=R[q],U=y[q],W=C[q],J=B*K*4*q;for(let H=0;H<k.count;H++){const ee=H*F;b===!0&&(r.fromBufferAttribute(k,H),k.normalized===!0&&to(r,k),D[J+ee+0]=r.x,D[J+ee+1]=r.y,D[J+ee+2]=r.z,D[J+ee+3]=0),v===!0&&(r.fromBufferAttribute(U,H),U.normalized===!0&&to(r,U),D[J+ee+4]=r.x,D[J+ee+5]=r.y,D[J+ee+6]=r.z,D[J+ee+7]=0),S===!0&&(r.fromBufferAttribute(W,H),W.normalized===!0&&to(r,W),D[J+ee+8]=r.x,D[J+ee+9]=r.y,D[J+ee+10]=r.z,D[J+ee+11]=W.itemSize===4?r.w:1)}}_={count:f,texture:P,size:new ye(B,K)},s.set(h,_),h.addEventListener("dispose",I)}let x=0;for(let b=0;b<p.length;b++)x+=p[b];const w=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(c,"morphTargetBaseInfluence",w),u.getUniforms().setValue(c,"morphTargetInfluences",p),u.getUniforms().setValue(c,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(c,"morphTargetsTextureSize",_.size)}else{const m=p===void 0?0:p.length;let f=n[h.id];if(f===void 0||f.length!==m){f=[];for(let v=0;v<m;v++)f[v]=[v,0];n[h.id]=f}for(let v=0;v<m;v++){const S=f[v];S[0]=v,S[1]=p[v]}f.sort(Fp);for(let v=0;v<8;v++)v<m&&f[v][1]?(o[v][0]=f[v][0],o[v][1]=f[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Np);const _=h.morphAttributes.position,x=h.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const S=o[v],R=S[0],y=S[1];R!==Number.MAX_SAFE_INTEGER&&y?(_&&h.getAttribute("morphTarget"+v)!==_[R]&&h.setAttribute("morphTarget"+v,_[R]),x&&h.getAttribute("morphNormal"+v)!==x[R]&&h.setAttribute("morphNormal"+v,x[R]),i[v]=y,w+=y):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),x&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const b=h.morphTargetsRelative?1:1-w;u.getUniforms().setValue(c,"morphTargetBaseInfluence",b),u.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function Op(c,e,t,n){let i=new WeakMap;function s(a){const l=n.render.frame,h=a.geometry,d=e.get(a,h);return i.get(d)!==l&&(e.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),t.update(a.instanceMatrix,34962),a.instanceColor!==null&&t.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){const l=a.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:r}}const Tc=new mt,Ac=new Mc,Cc=new Eu,Lc=new zo,Ja=[],Qa=[],el=new Float32Array(16),tl=new Float32Array(9),nl=new Float32Array(4);function Yi(c,e,t){const n=c[0];if(n<=0||n>0)return c;const i=e*t;let s=Ja[i];if(s===void 0&&(s=new Float32Array(i),Ja[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,c[r].toArray(s,o)}return s}function gt(c,e){if(c.length!==e.length)return!1;for(let t=0,n=c.length;t<n;t++)if(c[t]!==e[t])return!1;return!0}function _t(c,e){for(let t=0,n=e.length;t<n;t++)c[t]=e[t]}function gr(c,e){let t=Qa[e];t===void 0&&(t=new Int32Array(e),Qa[e]=t);for(let n=0;n!==e;++n)t[n]=c.allocateTextureUnit();return t}function Bp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1f(this.addr,e),t[0]=e)}function Up(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(c.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;c.uniform2fv(this.addr,e),_t(t,e)}}function kp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(c.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(c.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;c.uniform3fv(this.addr,e),_t(t,e)}}function Gp(c,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(c.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;c.uniform4fv(this.addr,e),_t(t,e)}}function Vp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;c.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;nl.set(n),c.uniformMatrix2fv(this.addr,!1,nl),_t(t,n)}}function Hp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;c.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;tl.set(n),c.uniformMatrix3fv(this.addr,!1,tl),_t(t,n)}}function Wp(c,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;c.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;el.set(n),c.uniformMatrix4fv(this.addr,!1,el),_t(t,n)}}function qp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1i(this.addr,e),t[0]=e)}function jp(c,e){const t=this.cache;gt(t,e)||(c.uniform2iv(this.addr,e),_t(t,e))}function Xp(c,e){const t=this.cache;gt(t,e)||(c.uniform3iv(this.addr,e),_t(t,e))}function Yp(c,e){const t=this.cache;gt(t,e)||(c.uniform4iv(this.addr,e),_t(t,e))}function Kp(c,e){const t=this.cache;t[0]!==e&&(c.uniform1ui(this.addr,e),t[0]=e)}function Zp(c,e){const t=this.cache;gt(t,e)||(c.uniform2uiv(this.addr,e),_t(t,e))}function $p(c,e){const t=this.cache;gt(t,e)||(c.uniform3uiv(this.addr,e),_t(t,e))}function Jp(c,e){const t=this.cache;gt(t,e)||(c.uniform4uiv(this.addr,e),_t(t,e))}function Qp(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Tc,i)}function em(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cc,i)}function tm(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lc,i)}function nm(c,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ac,i)}function im(c){switch(c){case 5126:return Bp;case 35664:return Up;case 35665:return kp;case 35666:return Gp;case 35674:return Vp;case 35675:return Hp;case 35676:return Wp;case 5124:case 35670:return qp;case 35667:case 35671:return jp;case 35668:case 35672:return Xp;case 35669:case 35673:return Yp;case 5125:return Kp;case 36294:return Zp;case 36295:return $p;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function sm(c,e){c.uniform1fv(this.addr,e)}function rm(c,e){const t=Yi(e,this.size,2);c.uniform2fv(this.addr,t)}function om(c,e){const t=Yi(e,this.size,3);c.uniform3fv(this.addr,t)}function am(c,e){const t=Yi(e,this.size,4);c.uniform4fv(this.addr,t)}function lm(c,e){const t=Yi(e,this.size,4);c.uniformMatrix2fv(this.addr,!1,t)}function cm(c,e){const t=Yi(e,this.size,9);c.uniformMatrix3fv(this.addr,!1,t)}function hm(c,e){const t=Yi(e,this.size,16);c.uniformMatrix4fv(this.addr,!1,t)}function um(c,e){c.uniform1iv(this.addr,e)}function dm(c,e){c.uniform2iv(this.addr,e)}function fm(c,e){c.uniform3iv(this.addr,e)}function pm(c,e){c.uniform4iv(this.addr,e)}function mm(c,e){c.uniform1uiv(this.addr,e)}function gm(c,e){c.uniform2uiv(this.addr,e)}function _m(c,e){c.uniform3uiv(this.addr,e)}function xm(c,e){c.uniform4uiv(this.addr,e)}function vm(c,e,t){const n=e.length,i=gr(t,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Tc,i[s])}function ym(c,e,t){const n=e.length,i=gr(t,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Cc,i[s])}function Mm(c,e,t){const n=e.length,i=gr(t,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Lc,i[s])}function bm(c,e,t){const n=e.length,i=gr(t,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ac,i[s])}function wm(c){switch(c){case 5126:return sm;case 35664:return rm;case 35665:return om;case 35666:return am;case 35674:return lm;case 35675:return cm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return bm}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=im(t.type)}}class Em{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=wm(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const no=/(\w+)(\])?(\[|\.)?/g;function il(c,e){c.seq.push(e),c.map[e.id]=e}function Am(c,e,t){const n=c.name,i=n.length;for(no.lastIndex=0;;){const s=no.exec(n),r=no.lastIndex;let o=s[1];const a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){il(t,l===void 0?new Sm(o,c,e):new Em(o,c,e));break}else{let d=t.map[o];d===void 0&&(d=new Tm(o),il(t,d)),t=d}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);Am(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(e,a.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function sl(c,e,t){const n=c.createShader(e);return c.shaderSource(n,t),c.compileShader(n),n}let Cm=0;function Lm(c,e){const t=c.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function Rm(c){switch(c){case ei:return["Linear","( value )"];case Ge:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function rl(c,e,t){const n=c.getShaderParameter(e,35713),i=c.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Lm(c.getShaderSource(e),r)}else return i}function Pm(c,e){const t=Rm(e);return"vec4 "+c+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Im(c,e){let t;switch(e){case Oh:t="Linear";break;case Bh:t="Reinhard";break;case Uh:t="OptimizedCineon";break;case kh:t="ACESFilmic";break;case Gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+c+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dm(c){return[c.extensionDerivatives||!!c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(us).join(`
`)}function Nm(c){const e=[];for(const t in c){const n=c[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fm(c,e){const t={},n=c.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=c.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:c.getAttribLocation(e,r),locationSize:o}}return t}function us(c){return c!==""}function ol(c,e){return c.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(c,e){return c.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(c){return c.replace(zm,Om)}function Om(c,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return So(t)}const Bm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(c){return c.replace(Um,Rc).replace(Bm,km)}function km(c,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Rc(c,e,t,n)}function Rc(c,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function cl(c){let e="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?e+=`
#define HIGH_PRECISION`:c.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Gm(c){let e="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF":c.shadowMapType===ph?e="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===hs&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(c){let e="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(c){let e="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function Wm(c){let e="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case uc:e="ENVMAP_BLENDING_MULTIPLY";break;case Fh:e="ENVMAP_BLENDING_MIX";break;case zh:e="ENVMAP_BLENDING_ADD";break}return e}function qm(c){const e=c.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jm(c,e,t,n){const i=c.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const a=Gm(t),l=Vm(t),h=Hm(t),d=Wm(t),u=qm(t),p=t.isWebGL2?"":Dm(t),g=Nm(s),m=i.createProgram();let f,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(us).join(`
`),f.length>0&&(f+=`
`),_=[p,g].filter(us).join(`
`),_.length>0&&(_+=`
`)):(f=[cl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),_=[p,cl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+a:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ce.tonemapping_pars_fragment:"",t.toneMapping!==gn?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Pm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),r=So(r),r=ol(r,t),r=al(r,t),o=So(o),o=ol(o,t),o=al(o,t),r=ll(r),o=ll(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+f+r,b=x+_+o,v=sl(i,35633,w),S=sl(i,35632,b);if(i.attachShader(m,v),i.attachShader(m,S),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),c.debug.checkShaderErrors){const C=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(v).trim(),B=i.getShaderInfoLog(S).trim();let K=!0,D=!0;if(i.getProgramParameter(m,35714)===!1){K=!1;const P=rl(i,v,"vertex"),F=rl(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+C+`
`+P+`
`+F)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(O===""||B==="")&&(D=!1);D&&(this.diagnostics={runnable:K,programLog:C,vertexShader:{log:O,prefix:f},fragmentShader:{log:B,prefix:_}})}i.deleteShader(v),i.deleteShader(S);let R;this.getUniforms=function(){return R===void 0&&(R=new ar(i,m)),R};let y;return this.getAttributes=function(){return y===void 0&&(y=Fm(i,m)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=Cm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=S,this}let Xm=0;class Ym{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new Km(e);t.set(e,n)}return t.get(e)}}class Km{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function Zm(c,e,t,n,i,s,r){const o=new Fo,a=new Ym,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y,C,O,B,K){const D=B.fog,P=K.geometry,F=y.isMeshStandardMaterial?B.environment:null,I=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),q=!!I&&I.mapping===fr?I.image.height:null,k=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const U=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,W=U!==void 0?U.length:0;let J=0;P.morphAttributes.position!==void 0&&(J=1),P.morphAttributes.normal!==void 0&&(J=2),P.morphAttributes.color!==void 0&&(J=3);let H,ee,ue,ge;if(k){const Be=Qt[k];H=Be.vertexShader,ee=Be.fragmentShader}else H=y.vertexShader,ee=y.fragmentShader,a.update(y),ue=a.getVertexShaderID(y),ge=a.getFragmentShaderID(y);const Z=c.getRenderTarget(),Pe=y.alphaTest>0,_e=y.clearcoat>0,Me=y.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:y.type,vertexShader:H,fragmentShader:ee,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:u,outputEncoding:Z===null?c.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:ei,map:!!y.map,matcap:!!y.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:q,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===au,tangentSpaceNormalMap:y.normalMapType===pr,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===Ge,clearcoat:_e,clearcoatMap:_e&&!!y.clearcoatMap,clearcoatRoughnessMap:_e&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!y.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!y.iridescenceMap,iridescenceThicknessMap:Me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Di,alphaMap:!!y.alphaMap,alphaTest:Pe,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!P.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:J,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:c.shadowMap.enabled&&O.length>0,shadowMapType:c.shadowMap.type,toneMapping:y.toneMapped?c.toneMapping:gn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===Wt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const O in y.defines)C.push(O),C.push(y.defines[O]);return y.isRawShaderMaterial===!1&&(_(C,y),x(C,y),C.push(c.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function _(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function x(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),C.fog&&o.enable(33),y.push(o.mask),o.disableAll(),C.useFog&&o.enable(0),C.flatShading&&o.enable(1),C.logarithmicDepthBuffer&&o.enable(2),C.skinning&&o.enable(3),C.morphTargets&&o.enable(4),C.morphNormals&&o.enable(5),C.morphColors&&o.enable(6),C.premultipliedAlpha&&o.enable(7),C.shadowMapEnabled&&o.enable(8),C.physicallyCorrectLights&&o.enable(9),C.doubleSided&&o.enable(10),C.flipSided&&o.enable(11),C.useDepthPacking&&o.enable(12),C.dithering&&o.enable(13),C.specularIntensityMap&&o.enable(14),C.specularColorMap&&o.enable(15),C.transmission&&o.enable(16),C.transmissionMap&&o.enable(17),C.thicknessMap&&o.enable(18),C.sheen&&o.enable(19),C.sheenColorMap&&o.enable(20),C.sheenRoughnessMap&&o.enable(21),C.decodeVideoTexture&&o.enable(22),C.opaque&&o.enable(23),y.push(o.mask)}function w(y){const C=g[y.type];let O;if(C){const B=Qt[C];O=Ou.clone(B.uniforms)}else O=y.uniforms;return O}function b(y,C){let O;for(let B=0,K=l.length;B<K;B++){const D=l[B];if(D.cacheKey===C){O=D,++O.usedTimes;break}}return O===void 0&&(O=new jm(c,C,y,s),l.push(O)),O}function v(y){if(--y.usedTimes===0){const C=l.indexOf(y);l[C]=l[l.length-1],l.pop(),y.destroy()}}function S(y){a.remove(y)}function R(){a.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:b,releaseProgram:v,releaseShaderCache:S,programs:l,dispose:R}}function $m(){let c=new WeakMap;function e(s){let r=c.get(s);return r===void 0&&(r={},c.set(s,r)),r}function t(s){c.delete(s)}function n(s,r,o){c.get(s)[r]=o}function i(){c=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Jm(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.material.id!==e.material.id?c.material.id-e.material.id:c.z!==e.z?c.z-e.z:c.id-e.id}function hl(c,e){return c.groupOrder!==e.groupOrder?c.groupOrder-e.groupOrder:c.renderOrder!==e.renderOrder?c.renderOrder-e.renderOrder:c.z!==e.z?e.z-c.z:c.id-e.id}function ul(){const c=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,p,g,m,f){let _=c[e];return _===void 0?(_={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:m,group:f},c[e]=_):(_.id=d.id,_.object=d,_.geometry=u,_.material=p,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=m,_.group=f),e++,_}function o(d,u,p,g,m,f){const _=r(d,u,p,g,m,f);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function a(d,u,p,g,m,f){const _=r(d,u,p,g,m,f);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function l(d,u){t.length>1&&t.sort(d||Jm),n.length>1&&n.sort(u||hl),i.length>1&&i.sort(u||hl)}function h(){for(let d=e,u=c.length;d<u;d++){const p=c[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:h,sort:l}}function Qm(){let c=new WeakMap;function e(n,i){let s;return c.has(n)===!1?(s=new ul,c.set(n,[s])):i>=c.get(n).length?(s=new ul,c.get(n).push(s)):s=c.get(n)[i],s}function t(){c=new WeakMap}return{get:e,dispose:t}}function eg(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new we};break;case"SpotLight":t={position:new N,direction:new N,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new N,halfWidth:new N,halfHeight:new N};break}return c[e.id]=t,t}}}function tg(){const c={};return{get:function(e){if(c[e.id]!==void 0)return c[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[e.id]=t,t}}}let ng=0;function ig(c,e){return(e.castShadow?1:0)-(c.castShadow?1:0)}function sg(c,e){const t=new eg,n=tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new N);const s=new N,r=new Fe,o=new Fe;function a(h,d){let u=0,p=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let m=0,f=0,_=0,x=0,w=0,b=0,v=0,S=0;h.sort(ig);const R=d!==!0?Math.PI:1;for(let C=0,O=h.length;C<O;C++){const B=h[C],K=B.color,D=B.intensity,P=B.distance,F=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)u+=K.r*D*R,p+=K.g*D*R,g+=K.b*D*R;else if(B.isLightProbe)for(let I=0;I<9;I++)i.probe[I].addScaledVector(B.sh.coefficients[I],D);else if(B.isDirectionalLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*R),B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.directionalShadow[m]=k,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=B.shadow.matrix,b++}i.directional[m]=I,m++}else if(B.isSpotLight){const I=t.get(B);if(I.position.setFromMatrixPosition(B.matrixWorld),I.color.copy(K).multiplyScalar(D*R),I.distance=P,I.coneCos=Math.cos(B.angle),I.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),I.decay=B.decay,B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=F,i.spotShadowMatrix[_]=B.shadow.matrix,S++}i.spot[_]=I,_++}else if(B.isRectAreaLight){const I=t.get(B);I.color.copy(K).multiplyScalar(D),I.halfWidth.set(B.width*.5,0,0),I.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=I,x++}else if(B.isPointLight){const I=t.get(B);if(I.color.copy(B.color).multiplyScalar(B.intensity*R),I.distance=B.distance,I.decay=B.decay,B.castShadow){const q=B.shadow,k=n.get(B);k.shadowBias=q.bias,k.shadowNormalBias=q.normalBias,k.shadowRadius=q.radius,k.shadowMapSize=q.mapSize,k.shadowCameraNear=q.camera.near,k.shadowCameraFar=q.camera.far,i.pointShadow[f]=k,i.pointShadowMap[f]=F,i.pointShadowMatrix[f]=B.shadow.matrix,v++}i.point[f]=I,f++}else if(B.isHemisphereLight){const I=t.get(B);I.skyColor.copy(B.color).multiplyScalar(D*R),I.groundColor.copy(B.groundColor).multiplyScalar(D*R),i.hemi[w]=I,w++}}x>0&&(e.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=g;const y=i.hash;(y.directionalLength!==m||y.pointLength!==f||y.spotLength!==_||y.rectAreaLength!==x||y.hemiLength!==w||y.numDirectionalShadows!==b||y.numPointShadows!==v||y.numSpotShadows!==S)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=x,i.point.length=f,i.hemi.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=S,y.directionalLength=m,y.pointLength=f,y.spotLength=_,y.rectAreaLength=x,y.hemiLength=w,y.numDirectionalShadows=b,y.numPointShadows=v,y.numSpotShadows=S,i.version=ng++)}function l(h,d){let u=0,p=0,g=0,m=0,f=0;const _=d.matrixWorldInverse;for(let x=0,w=h.length;x<w;x++){const b=h[x];if(b.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),u++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),o.identity(),r.copy(b.matrixWorld),r.premultiply(_),o.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){const v=i.point[p];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),p++}else if(b.isHemisphereLight){const v=i.hemi[f];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),f++}}}return{setup:a,setupView:l,state:i}}function dl(c,e){const t=new sg(c,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function rg(c,e){let t=new WeakMap;function n(s,r=0){let o;return t.has(s)===!1?(o=new dl(c,e),t.set(s,[o])):r>=t.get(s).length?(o=new dl(c,e),t.get(s).push(o)):o=t.get(s)[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}class og extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hg(c,e,t){let n=new Oo;const i=new ye,s=new ye,r=new He,o=new og({depthPacking:ou}),a=new ag,l={},h=t.maxTextureSize,d={0:Wt,1:zi,2:Jn},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ft(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc,this.render=function(b,v,S){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const R=c.getRenderTarget(),y=c.getActiveCubeFace(),C=c.getActiveMipmapLevel(),O=c.state;O.setBlending(Dn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);for(let B=0,K=b.length;B<K;B++){const D=b[B],P=D.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const F=P.getFrameExtents();if(i.multiply(F),s.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/F.x),i.x=s.x*F.x,P.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/F.y),i.y=s.y*F.y,P.mapSize.y=s.y)),P.map===null){const q=this.type!==hs?{minFilter:lt,magFilter:lt}:{};P.map=new ti(i.x,i.y,q),P.map.texture.name=D.name+".shadowMap",P.camera.updateProjectionMatrix()}c.setRenderTarget(P.map),c.clear();const I=P.getViewportCount();for(let q=0;q<I;q++){const k=P.getViewport(q);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),O.viewport(r),P.updateMatrices(D,q),n=P.getFrustum(),w(v,S,P.camera,D,this.type)}P.isPointLightShadow!==!0&&this.type===hs&&_(P,S),P.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(R,y,C)};function _(b,v){const S=e.update(m);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ti(i.x,i.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,c.setRenderTarget(b.mapPass),c.clear(),c.renderBufferDirect(v,null,S,u,m,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,c.setRenderTarget(b.map),c.clear(),c.renderBufferDirect(v,null,S,p,m,null)}function x(b,v,S,R,y,C){let O=null;const B=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0?O=B:O=S.isPointLight===!0?a:o,c.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const K=O.uuid,D=v.uuid;let P=l[K];P===void 0&&(P={},l[K]=P);let F=P[D];F===void 0&&(F=O.clone(),P[D]=F),O=F}return O.visible=v.visible,O.wireframe=v.wireframe,C===hs?O.side=v.shadowSide!==null?v.shadowSide:v.side:O.side=v.shadowSide!==null?v.shadowSide:d[v.side],O.alphaMap=v.alphaMap,O.alphaTest=v.alphaTest,O.clipShadows=v.clipShadows,O.clippingPlanes=v.clippingPlanes,O.clipIntersection=v.clipIntersection,O.displacementMap=v.displacementMap,O.displacementScale=v.displacementScale,O.displacementBias=v.displacementBias,O.wireframeLinewidth=v.wireframeLinewidth,O.linewidth=v.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0&&(O.referencePosition.setFromMatrixPosition(S.matrixWorld),O.nearDistance=R,O.farDistance=y),O}function w(b,v,S,R,y){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===hs)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const B=e.update(b),K=b.material;if(Array.isArray(K)){const D=B.groups;for(let P=0,F=D.length;P<F;P++){const I=D[P],q=K[I.materialIndex];if(q&&q.visible){const k=x(b,q,R,S.near,S.far,y);c.renderBufferDirect(S,null,B,k,b,I)}}}else if(K.visible){const D=x(b,K,R,S.near,S.far,y);c.renderBufferDirect(S,null,B,D,b,null)}}const O=b.children;for(let B=0,K=O.length;B<K;B++)w(O[B],v,S,R,y)}}function ug(c,e,t){const n=t.isWebGL2;function i(){let z=!1;const se=new He;let X=null;const he=new He(0,0,0,0);return{setMask:function(ce){X!==ce&&!z&&(c.colorMask(ce,ce,ce,ce),X=ce)},setLocked:function(ce){z=ce},setClear:function(ce,De,rt,Ye,xn){xn===!0&&(ce*=Ye,De*=Ye,rt*=Ye),se.set(ce,De,rt,Ye),he.equals(se)===!1&&(c.clearColor(ce,De,rt,Ye),he.copy(se))},reset:function(){z=!1,X=null,he.set(-1,0,0,0)}}}function s(){let z=!1,se=null,X=null,he=null;return{setTest:function(ce){ce?Pe(2929):_e(2929)},setMask:function(ce){se!==ce&&!z&&(c.depthMask(ce),se=ce)},setFunc:function(ce){if(X!==ce){if(ce)switch(ce){case Ch:c.depthFunc(512);break;case Lh:c.depthFunc(519);break;case Rh:c.depthFunc(513);break;case go:c.depthFunc(515);break;case Ph:c.depthFunc(514);break;case Ih:c.depthFunc(518);break;case Dh:c.depthFunc(516);break;case Nh:c.depthFunc(517);break;default:c.depthFunc(515)}else c.depthFunc(515);X=ce}},setLocked:function(ce){z=ce},setClear:function(ce){he!==ce&&(c.clearDepth(ce),he=ce)},reset:function(){z=!1,se=null,X=null,he=null}}}function r(){let z=!1,se=null,X=null,he=null,ce=null,De=null,rt=null,Ye=null,xn=null;return{setTest:function(je){z||(je?Pe(2960):_e(2960))},setMask:function(je){se!==je&&!z&&(c.stencilMask(je),se=je)},setFunc:function(je,tn,Rt){(X!==je||he!==tn||ce!==Rt)&&(c.stencilFunc(je,tn,Rt),X=je,he=tn,ce=Rt)},setOp:function(je,tn,Rt){(De!==je||rt!==tn||Ye!==Rt)&&(c.stencilOp(je,tn,Rt),De=je,rt=tn,Ye=Rt)},setLocked:function(je){z=je},setClear:function(je){xn!==je&&(c.clearStencil(je),xn=je)},reset:function(){z=!1,se=null,X=null,he=null,ce=null,De=null,rt=null,Ye=null,xn=null}}}const o=new i,a=new s,l=new r,h=new WeakMap,d=new WeakMap;let u={},p={},g=new WeakMap,m=[],f=null,_=!1,x=null,w=null,b=null,v=null,S=null,R=null,y=null,C=!1,O=null,B=null,K=null,D=null,P=null;const F=c.getParameter(35661);let I=!1,q=0;const k=c.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=q>=2);let U=null,W={};const J=c.getParameter(3088),H=c.getParameter(2978),ee=new He().fromArray(J),ue=new He().fromArray(H);function ge(z,se,X){const he=new Uint8Array(4),ce=c.createTexture();c.bindTexture(z,ce),c.texParameteri(z,10241,9728),c.texParameteri(z,10240,9728);for(let De=0;De<X;De++)c.texImage2D(se+De,0,6408,1,1,0,6408,5121,he);return ce}const Z={};Z[3553]=ge(3553,3553,1),Z[34067]=ge(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),Pe(2929),a.setFunc(go),tt(!1),yt(na),Pe(2884),Ke(Dn);function Pe(z){u[z]!==!0&&(c.enable(z),u[z]=!0)}function _e(z){u[z]!==!1&&(c.disable(z),u[z]=!1)}function Me(z,se){return p[z]!==se?(c.bindFramebuffer(z,se),p[z]=se,n&&(z===36009&&(p[36160]=se),z===36160&&(p[36009]=se)),!0):!1}function pe(z,se){let X=m,he=!1;if(z)if(X=g.get(se),X===void 0&&(X=[],g.set(se,X)),z.isWebGLMultipleRenderTargets){const ce=z.texture;if(X.length!==ce.length||X[0]!==36064){for(let De=0,rt=ce.length;De<rt;De++)X[De]=36064+De;X.length=ce.length,he=!0}}else X[0]!==36064&&(X[0]=36064,he=!0);else X[0]!==1029&&(X[0]=1029,he=!0);he&&(t.isWebGL2?c.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Be(z){return f!==z?(c.useProgram(z),f=z,!0):!1}const Ee={[Ri]:32774,[_h]:32778,[xh]:32779};if(n)Ee[oa]=32775,Ee[aa]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(Ee[oa]=z.MIN_EXT,Ee[aa]=z.MAX_EXT)}const me={[vh]:0,[yh]:1,[Mh]:768,[cc]:770,[Ah]:776,[Eh]:774,[wh]:772,[bh]:769,[hc]:771,[Th]:775,[Sh]:773};function Ke(z,se,X,he,ce,De,rt,Ye){if(z===Dn){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(Pe(3042),_=!0),z!==gh){if(z!==x||Ye!==C){if((w!==Ri||S!==Ri)&&(c.blendEquation(32774),w=Ri,S=Ri),Ye)switch(z){case Di:c.blendFuncSeparate(1,771,1,771);break;case ia:c.blendFunc(1,1);break;case sa:c.blendFuncSeparate(0,769,0,1);break;case ra:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Di:c.blendFuncSeparate(770,771,1,771);break;case ia:c.blendFunc(770,1);break;case sa:c.blendFuncSeparate(0,769,0,1);break;case ra:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}b=null,v=null,R=null,y=null,x=z,C=Ye}return}ce=ce||se,De=De||X,rt=rt||he,(se!==w||ce!==S)&&(c.blendEquationSeparate(Ee[se],Ee[ce]),w=se,S=ce),(X!==b||he!==v||De!==R||rt!==y)&&(c.blendFuncSeparate(me[X],me[he],me[De],me[rt]),b=X,v=he,R=De,y=rt),x=z,C=null}function at(z,se){z.side===Jn?_e(2884):Pe(2884);let X=z.side===Wt;se&&(X=!X),tt(X),z.blending===Di&&z.transparent===!1?Ke(Dn):Ke(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const he=z.stencilWrite;l.setTest(he),he&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ue(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Pe(32926):_e(32926)}function tt(z){O!==z&&(z?c.frontFace(2304):c.frontFace(2305),O=z)}function yt(z){z!==dh?(Pe(2884),z!==B&&(z===na?c.cullFace(1029):z===fh?c.cullFace(1028):c.cullFace(1032))):_e(2884),B=z}function nt(z){z!==K&&(I&&c.lineWidth(z),K=z)}function Ue(z,se,X){z?(Pe(32823),(D!==se||P!==X)&&(c.polygonOffset(se,X),D=se,P=X)):_e(32823)}function Lt(z){z?Pe(3089):_e(3089)}function Mt(z){z===void 0&&(z=33984+F-1),U!==z&&(c.activeTexture(z),U=z)}function L(z,se){U===null&&Mt();let X=W[U];X===void 0&&(X={type:void 0,texture:void 0},W[U]=X),(X.type!==z||X.texture!==se)&&(c.bindTexture(z,se||Z[z]),X.type=z,X.texture=se)}function E(){const z=W[U];z!==void 0&&z.type!==void 0&&(c.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Y(){try{c.compressedTexImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function te(){try{c.texSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{c.texSubImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{c.texStorage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function T(){try{c.texStorage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{c.texImage2D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{c.texImage3D.apply(c,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(z){ee.equals(z)===!1&&(c.scissor(z.x,z.y,z.z,z.w),ee.copy(z))}function oe(z){ue.equals(z)===!1&&(c.viewport(z.x,z.y,z.z,z.w),ue.copy(z))}function ve(z,se){let X=d.get(se);X===void 0&&(X=new WeakMap,d.set(se,X));let he=X.get(z);he===void 0&&(he=c.getUniformBlockIndex(se,z.name),X.set(z,he))}function Re(z,se){const he=d.get(se).get(z);h.get(z)!==he&&(c.uniformBlockBinding(se,he,z.__bindingPointIndex),h.set(z,he))}function qe(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),u={},U=null,W={},p={},g=new WeakMap,m=[],f=null,_=!1,x=null,w=null,b=null,v=null,S=null,R=null,y=null,C=!1,O=null,B=null,K=null,D=null,P=null,ee.set(0,0,c.canvas.width,c.canvas.height),ue.set(0,0,c.canvas.width,c.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:Pe,disable:_e,bindFramebuffer:Me,drawBuffers:pe,useProgram:Be,setBlending:Ke,setMaterial:at,setFlipSided:tt,setCullFace:yt,setLineWidth:nt,setPolygonOffset:Ue,setScissorTest:Lt,activeTexture:Mt,bindTexture:L,unbindTexture:E,compressedTexImage2D:Y,texImage2D:Q,texImage3D:ie,updateUBOMapping:ve,uniformBlockBinding:Re,texStorage2D:xe,texStorage3D:T,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:ae,scissor:le,viewport:oe,reset:qe}}function dg(c,e,t,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(L,E){return _?new OffscreenCanvas(L,E):xs("canvas")}function w(L,E,Y,te){let ne=1;if((L.width>te||L.height>te)&&(ne=te/Math.max(L.width,L.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ae=E?cr:Math.floor,xe=ae(ne*L.width),T=ae(ne*L.height);m===void 0&&(m=x(xe,T));const Q=Y?x(xe,T):m;return Q.width=xe,Q.height=T,Q.getContext("2d").drawImage(L,0,0,xe,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+xe+"x"+T+")."),Q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return wo(L.width)&&wo(L.height)}function v(L){return o?!1:L.wrapS!==Dt||L.wrapT!==Dt||L.minFilter!==lt&&L.minFilter!==vt}function S(L,E){return L.generateMipmaps&&E&&L.minFilter!==lt&&L.minFilter!==vt}function R(L){c.generateMipmap(L)}function y(L,E,Y,te,ne=!1){if(o===!1)return E;if(L!==null){if(c[L]!==void 0)return c[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=E;return E===6403&&(Y===5126&&(ae=33326),Y===5131&&(ae=33325),Y===5121&&(ae=33321)),E===33319&&(Y===5126&&(ae=33328),Y===5131&&(ae=33327),Y===5121&&(ae=33323)),E===6408&&(Y===5126&&(ae=34836),Y===5131&&(ae=34842),Y===5121&&(ae=te===Ge&&ne===!1?35907:32856),Y===32819&&(ae=32854),Y===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function C(L,E,Y){return S(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==lt&&L.minFilter!==vt?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function O(L){return L===lt||L===vo||L===yo?9728:9729}function B(L){const E=L.target;E.removeEventListener("dispose",B),D(E),E.isVideoTexture&&g.delete(E)}function K(L){const E=L.target;E.removeEventListener("dispose",K),F(E)}function D(L){const E=n.get(L);if(E.__webglInit===void 0)return;const Y=L.source,te=f.get(Y);if(te){const ne=te[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(L),Object.keys(te).length===0&&f.delete(Y)}n.remove(L)}function P(L){const E=n.get(L);c.deleteTexture(E.__webglTexture);const Y=L.source,te=f.get(Y);delete te[E.__cacheKey],r.memory.textures--}function F(L){const E=L.texture,Y=n.get(L),te=n.get(E);if(te.__webglTexture!==void 0&&(c.deleteTexture(te.__webglTexture),r.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)c.deleteFramebuffer(Y.__webglFramebuffer[ne]),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer[ne]);else{if(c.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ne=0;ne<Y.__webglColorRenderbuffer.length;ne++)Y.__webglColorRenderbuffer[ne]&&c.deleteRenderbuffer(Y.__webglColorRenderbuffer[ne]);Y.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ne=0,ae=E.length;ne<ae;ne++){const xe=n.get(E[ne]);xe.__webglTexture&&(c.deleteTexture(xe.__webglTexture),r.memory.textures--),n.remove(E[ne])}n.remove(E),n.remove(L)}let I=0;function q(){I=0}function k(){const L=I;return L>=a&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a),I+=1,L}function U(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.encoding),E.join()}function W(L,E){const Y=n.get(L);if(L.isVideoTexture&&Lt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Y,L,E);return}}t.activeTexture(33984+E),t.bindTexture(3553,Y.__webglTexture)}function J(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){_e(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(35866,Y.__webglTexture)}function H(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){_e(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(32879,Y.__webglTexture)}function ee(L,E){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Me(Y,L,E);return}t.activeTexture(33984+E),t.bindTexture(34067,Y.__webglTexture)}const ue={[Fn]:10497,[Dt]:33071,[lr]:33648},ge={[lt]:9728,[vo]:9984,[yo]:9986,[vt]:9729,[fc]:9985,[Wi]:9987};function Z(L,E,Y){if(Y?(c.texParameteri(L,10242,ue[E.wrapS]),c.texParameteri(L,10243,ue[E.wrapT]),(L===32879||L===35866)&&c.texParameteri(L,32882,ue[E.wrapR]),c.texParameteri(L,10240,ge[E.magFilter]),c.texParameteri(L,10241,ge[E.minFilter])):(c.texParameteri(L,10242,33071),c.texParameteri(L,10243,33071),(L===32879||L===35866)&&c.texParameteri(L,32882,33071),(E.wrapS!==Dt||E.wrapT!==Dt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(L,10240,O(E.magFilter)),c.texParameteri(L,10241,O(E.minFilter)),E.minFilter!==lt&&E.minFilter!==vt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(E.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(c.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Pe(L,E){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",B));const te=E.source;let ne=f.get(te);ne===void 0&&(ne={},f.set(te,ne));const ae=U(E);if(ae!==L.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:c.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),ne[ae].usedTimes++;const xe=ne[L.__cacheKey];xe!==void 0&&(ne[L.__cacheKey].usedTimes--,xe.usedTimes===0&&P(E)),L.__cacheKey=ae,L.__webglTexture=ne[ae].texture}return Y}function _e(L,E,Y){let te=3553;E.isDataArrayTexture&&(te=35866),E.isData3DTexture&&(te=32879);const ne=Pe(L,E),ae=E.source;if(t.activeTexture(33984+Y),t.bindTexture(te,L.__webglTexture),ae.version!==ae.__currentVersion||ne===!0){c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const xe=v(E)&&b(E.image)===!1;let T=w(E.image,xe,!1,h);T=Mt(E,T);const Q=b(T)||o,ie=s.convert(E.format,E.encoding);let le=s.convert(E.type),oe=y(E.internalFormat,ie,le,E.encoding,E.isVideoTexture);Z(te,E,Q);let ve;const Re=E.mipmaps,qe=o&&E.isVideoTexture!==!0,z=ae.__currentVersion===void 0||ne===!0,se=C(E,T,Q);if(E.isDepthTexture)oe=6402,o?E.type===Pn?oe=36012:E.type===jn?oe=33190:E.type===Ni?oe=35056:oe=33189:E.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&oe===6402&&E.type!==pc&&E.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=jn,le=s.convert(E.type)),E.format===Ui&&oe===6402&&(oe=34041,E.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Ni,le=s.convert(E.type))),z&&(qe?t.texStorage2D(3553,1,oe,T.width,T.height):t.texImage2D(3553,0,oe,T.width,T.height,0,ie,le,null));else if(E.isDataTexture)if(Re.length>0&&Q){qe&&z&&t.texStorage2D(3553,se,oe,Re[0].width,Re[0].height);for(let X=0,he=Re.length;X<he;X++)ve=Re[X],qe?t.texSubImage2D(3553,X,0,0,ve.width,ve.height,ie,le,ve.data):t.texImage2D(3553,X,oe,ve.width,ve.height,0,ie,le,ve.data);E.generateMipmaps=!1}else qe?(z&&t.texStorage2D(3553,se,oe,T.width,T.height),t.texSubImage2D(3553,0,0,0,T.width,T.height,ie,le,T.data)):t.texImage2D(3553,0,oe,T.width,T.height,0,ie,le,T.data);else if(E.isCompressedTexture){qe&&z&&t.texStorage2D(3553,se,oe,Re[0].width,Re[0].height);for(let X=0,he=Re.length;X<he;X++)ve=Re[X],E.format!==Vt?ie!==null?qe?t.compressedTexSubImage2D(3553,X,0,0,ve.width,ve.height,ie,ve.data):t.compressedTexImage2D(3553,X,oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(3553,X,0,0,ve.width,ve.height,ie,le,ve.data):t.texImage2D(3553,X,oe,ve.width,ve.height,0,ie,le,ve.data)}else if(E.isDataArrayTexture)qe?(z&&t.texStorage3D(35866,se,oe,T.width,T.height,T.depth),t.texSubImage3D(35866,0,0,0,0,T.width,T.height,T.depth,ie,le,T.data)):t.texImage3D(35866,0,oe,T.width,T.height,T.depth,0,ie,le,T.data);else if(E.isData3DTexture)qe?(z&&t.texStorage3D(32879,se,oe,T.width,T.height,T.depth),t.texSubImage3D(32879,0,0,0,0,T.width,T.height,T.depth,ie,le,T.data)):t.texImage3D(32879,0,oe,T.width,T.height,T.depth,0,ie,le,T.data);else if(E.isFramebufferTexture){if(z)if(qe)t.texStorage2D(3553,se,oe,T.width,T.height);else{let X=T.width,he=T.height;for(let ce=0;ce<se;ce++)t.texImage2D(3553,ce,oe,X,he,0,ie,le,null),X>>=1,he>>=1}}else if(Re.length>0&&Q){qe&&z&&t.texStorage2D(3553,se,oe,Re[0].width,Re[0].height);for(let X=0,he=Re.length;X<he;X++)ve=Re[X],qe?t.texSubImage2D(3553,X,0,0,ie,le,ve):t.texImage2D(3553,X,oe,ie,le,ve);E.generateMipmaps=!1}else qe?(z&&t.texStorage2D(3553,se,oe,T.width,T.height),t.texSubImage2D(3553,0,0,0,ie,le,T)):t.texImage2D(3553,0,oe,ie,le,T);S(E,Q)&&R(te),ae.__currentVersion=ae.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Me(L,E,Y){if(E.image.length!==6)return;const te=Pe(L,E),ne=E.source;if(t.activeTexture(33984+Y),t.bindTexture(34067,L.__webglTexture),ne.version!==ne.__currentVersion||te===!0){c.pixelStorei(37440,E.flipY),c.pixelStorei(37441,E.premultiplyAlpha),c.pixelStorei(3317,E.unpackAlignment),c.pixelStorei(37443,0);const ae=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,T=[];for(let X=0;X<6;X++)!ae&&!xe?T[X]=w(E.image[X],!1,!0,l):T[X]=xe?E.image[X].image:E.image[X],T[X]=Mt(E,T[X]);const Q=T[0],ie=b(Q)||o,le=s.convert(E.format,E.encoding),oe=s.convert(E.type),ve=y(E.internalFormat,le,oe,E.encoding),Re=o&&E.isVideoTexture!==!0,qe=ne.__currentVersion===void 0||te===!0;let z=C(E,Q,ie);Z(34067,E,ie);let se;if(ae){Re&&qe&&t.texStorage2D(34067,z,ve,Q.width,Q.height);for(let X=0;X<6;X++){se=T[X].mipmaps;for(let he=0;he<se.length;he++){const ce=se[he];E.format!==Vt?le!==null?Re?t.compressedTexSubImage2D(34069+X,he,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(34069+X,he,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+X,he,0,0,ce.width,ce.height,le,oe,ce.data):t.texImage2D(34069+X,he,ve,ce.width,ce.height,0,le,oe,ce.data)}}}else{se=E.mipmaps,Re&&qe&&(se.length>0&&z++,t.texStorage2D(34067,z,ve,T[0].width,T[0].height));for(let X=0;X<6;X++)if(xe){Re?t.texSubImage2D(34069+X,0,0,0,T[X].width,T[X].height,le,oe,T[X].data):t.texImage2D(34069+X,0,ve,T[X].width,T[X].height,0,le,oe,T[X].data);for(let he=0;he<se.length;he++){const De=se[he].image[X].image;Re?t.texSubImage2D(34069+X,he+1,0,0,De.width,De.height,le,oe,De.data):t.texImage2D(34069+X,he+1,ve,De.width,De.height,0,le,oe,De.data)}}else{Re?t.texSubImage2D(34069+X,0,0,0,le,oe,T[X]):t.texImage2D(34069+X,0,ve,le,oe,T[X]);for(let he=0;he<se.length;he++){const ce=se[he];Re?t.texSubImage2D(34069+X,he+1,0,0,le,oe,ce.image[X]):t.texImage2D(34069+X,he+1,ve,le,oe,ce.image[X])}}}S(E,ie)&&R(34067),ne.__currentVersion=ne.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,Y,te,ne){const ae=s.convert(Y.format,Y.encoding),xe=s.convert(Y.type),T=y(Y.internalFormat,ae,xe,Y.encoding);n.get(E).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,T,E.width,E.height,E.depth,0,ae,xe,null):t.texImage2D(ne,0,T,E.width,E.height,0,ae,xe,null)),t.bindFramebuffer(36160,L),Ue(E)?u.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(Y).__webglTexture,0,nt(E)):c.framebufferTexture2D(36160,te,ne,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(L,E,Y){if(c.bindRenderbuffer(36161,L),E.depthBuffer&&!E.stencilBuffer){let te=33189;if(Y||Ue(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Pn?te=36012:ne.type===jn&&(te=33190));const ae=nt(E);Ue(E)?u.renderbufferStorageMultisampleEXT(36161,ae,te,E.width,E.height):c.renderbufferStorageMultisample(36161,ae,te,E.width,E.height)}else c.renderbufferStorage(36161,te,E.width,E.height);c.framebufferRenderbuffer(36160,36096,36161,L)}else if(E.depthBuffer&&E.stencilBuffer){const te=nt(E);Y&&Ue(E)===!1?c.renderbufferStorageMultisample(36161,te,35056,E.width,E.height):Ue(E)?u.renderbufferStorageMultisampleEXT(36161,te,35056,E.width,E.height):c.renderbufferStorage(36161,34041,E.width,E.height),c.framebufferRenderbuffer(36160,33306,36161,L)}else{const te=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],xe=s.convert(ae.format,ae.encoding),T=s.convert(ae.type),Q=y(ae.internalFormat,xe,T,ae.encoding),ie=nt(E);Y&&Ue(E)===!1?c.renderbufferStorageMultisample(36161,ie,Q,E.width,E.height):Ue(E)?u.renderbufferStorageMultisampleEXT(36161,ie,Q,E.width,E.height):c.renderbufferStorage(36161,Q,E.width,E.height)}}c.bindRenderbuffer(36161,null)}function Ee(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const te=n.get(E.depthTexture).__webglTexture,ne=nt(E);if(E.depthTexture.format===Kn)Ue(E)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):c.framebufferTexture2D(36160,36096,3553,te,0);else if(E.depthTexture.format===Ui)Ue(E)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):c.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function me(L){const E=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,L)}else if(Y){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]=c.createRenderbuffer(),Be(E.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(36160,E.__webglFramebuffer),E.__webglDepthbuffer=c.createRenderbuffer(),Be(E.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ke(L,E,Y){const te=n.get(L);E!==void 0&&pe(te.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&me(L)}function at(L){const E=L.texture,Y=n.get(L),te=n.get(E);L.addEventListener("dispose",K),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=c.createTexture()),te.__version=E.version,r.memory.textures++);const ne=L.isWebGLCubeRenderTarget===!0,ae=L.isWebGLMultipleRenderTargets===!0,xe=b(L)||o;if(ne){Y.__webglFramebuffer=[];for(let T=0;T<6;T++)Y.__webglFramebuffer[T]=c.createFramebuffer()}else{if(Y.__webglFramebuffer=c.createFramebuffer(),ae)if(i.drawBuffers){const T=L.texture;for(let Q=0,ie=T.length;Q<ie;Q++){const le=n.get(T[Q]);le.__webglTexture===void 0&&(le.__webglTexture=c.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ue(L)===!1){const T=ae?E:[E];Y.__webglMultisampledFramebuffer=c.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<T.length;Q++){const ie=T[Q];Y.__webglColorRenderbuffer[Q]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[Q]);const le=s.convert(ie.format,ie.encoding),oe=s.convert(ie.type),ve=y(ie.internalFormat,le,oe,ie.encoding),Re=nt(L);c.renderbufferStorageMultisample(36161,Re,ve,L.width,L.height),c.framebufferRenderbuffer(36160,36064+Q,36161,Y.__webglColorRenderbuffer[Q])}c.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=c.createRenderbuffer(),Be(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),Z(34067,E,xe);for(let T=0;T<6;T++)pe(Y.__webglFramebuffer[T],L,E,36064,34069+T);S(E,xe)&&R(34067),t.unbindTexture()}else if(ae){const T=L.texture;for(let Q=0,ie=T.length;Q<ie;Q++){const le=T[Q],oe=n.get(le);t.bindTexture(3553,oe.__webglTexture),Z(3553,le,xe),pe(Y.__webglFramebuffer,L,le,36064+Q,3553),S(le,xe)&&R(3553)}t.unbindTexture()}else{let T=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?T=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,te.__webglTexture),Z(T,E,xe),pe(Y.__webglFramebuffer,L,E,36064,T),S(E,xe)&&R(T),t.unbindTexture()}L.depthBuffer&&me(L)}function tt(L){const E=b(L)||o,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ne=Y.length;te<ne;te++){const ae=Y[te];if(S(ae,E)){const xe=L.isWebGLCubeRenderTarget?34067:3553,T=n.get(ae).__webglTexture;t.bindTexture(xe,T),R(xe),t.unbindTexture()}}}function yt(L){if(o&&L.samples>0&&Ue(L)===!1){const E=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,te=L.height;let ne=16384;const ae=[],xe=L.stencilBuffer?33306:36096,T=n.get(L),Q=L.isWebGLMultipleRenderTargets===!0;if(Q)for(let ie=0;ie<E.length;ie++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ie,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ie,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){ae.push(36064+ie),L.depthBuffer&&ae.push(xe);const le=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(le===!1&&(L.depthBuffer&&(ne|=256),L.stencilBuffer&&(ne|=1024)),Q&&c.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[ie]),le===!0&&(c.invalidateFramebuffer(36008,[xe]),c.invalidateFramebuffer(36009,[xe])),Q){const oe=n.get(E[ie]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,oe,0)}c.blitFramebuffer(0,0,Y,te,0,0,Y,te,ne,9728),p&&c.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let ie=0;ie<E.length;ie++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ie,36161,T.__webglColorRenderbuffer[ie]);const le=n.get(E[ie]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ie,3553,le,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function nt(L){return Math.min(d,L.samples)}function Ue(L){const E=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Lt(L){const E=r.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function Mt(L,E){const Y=L.encoding,te=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===bo||Y!==ei&&(Y===Ge?o===!1?e.has("EXT_sRGB")===!0&&te===Vt?(L.format=bo,L.minFilter=vt,L.generateMipmaps=!1):E=vc.sRGBToLinear(E):(te!==Vt||ne!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),E}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Ke,this.setupRenderTarget=at,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ue}function fg(c,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Qn)return 5121;if(s===qh)return 32819;if(s===jh)return 32820;if(s===Vh)return 5120;if(s===Hh)return 5122;if(s===pc)return 5123;if(s===Wh)return 5124;if(s===jn)return 5125;if(s===Pn)return 5126;if(s===ms)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Xh)return 6406;if(s===Vt)return 6408;if(s===Kh)return 6409;if(s===Zh)return 6410;if(s===Kn)return 6402;if(s===Ui)return 34041;if(s===$h)return 6403;if(s===Yh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===bo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jh)return 36244;if(s===Qh)return 33319;if(s===eu)return 33320;if(s===tu)return 36249;if(s===Tr||s===Ar||s===Cr||s===Lr)if(r===Ge)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ar)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===la||s===ca||s===ha||s===ua)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===la)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ca)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ha)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ua)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===da||s===fa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===da)return r===Ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pa||s===ma||s===ga||s===_a||s===xa||s===va||s===ya||s===Ma||s===ba||s===wa||s===Sa||s===Ea||s===Ta||s===Aa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ma)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ga)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_a)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===va)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ya)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ma)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ba)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===wa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ea)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ta)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Aa)return r===Ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ca)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ca)return r===Ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Ni?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}class pg extends pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yn extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mg={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(const m of e.hand.values()){const f=t.getJointPose(m,n);if(l.joints[m.jointName]===void 0){const x=new Yn;x.matrixAutoUpdate=!1,x.visible=!1,l.joints[m.jointName]=x,l.add(x)}const _=l.joints[m.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else a!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}}class gg extends mt{constructor(e,t,n,i,s,r,o,a,l,h){if(h=h!==void 0?h:Kn,h!==Kn&&h!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Kn&&(n=jn),n===void 0&&h===Ui&&(n=Ni),super(null,i,s,r,o,a,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:lt,this.minFilter=a!==void 0?a:lt,this.flipY=!1,this.generateMipmaps=!1}}class _g extends ri{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=null,l=null,h=null,d=null,u=null,p=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],x=[],w=new pt;w.layers.enable(1),w.viewport=new He;const b=new pt;b.layers.enable(2),b.viewport=new He;const v=[w,b],S=new pg;S.layers.enable(1),S.layers.enable(2);let R=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let W=_[U];return W===void 0&&(W=new io,_[U]=W),W.getTargetRaySpace()},this.getControllerGrip=function(U){let W=_[U];return W===void 0&&(W=new io,_[U]=W),W.getGripSpace()},this.getHand=function(U){let W=_[U];return W===void 0&&(W=new io,_[U]=W),W.getHandSpace()};function C(U){const W=x.indexOf(U.inputSource);if(W===-1)return;const J=_[W];J!==void 0&&J.dispatchEvent({type:U.type,data:U.inputSource})}function O(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",B);for(let U=0;U<_.length;U++){const W=x[U];W!==null&&(x[U]=null,_[U].disconnect(W))}R=null,y=null,e.setRenderTarget(m),u=null,d=null,h=null,i=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){o=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||r},this.setReferenceSpace=function(U){a=U},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",O),i.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:u}),f=new ti(u.framebufferWidth,u.framebufferHeight,{format:Vt,type:Qn,encoding:e.outputEncoding})}else{let W=null,J=null,H=null;g.depth&&(H=g.stencil?35056:33190,W=g.stencil?Ui:Kn,J=g.stencil?Ni:jn);const ee={colorFormat:32856,depthFormat:H,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),f=new ti(d.textureWidth,d.textureHeight,{format:Vt,type:Qn,depthTexture:new gg(d.textureWidth,d.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const ue=e.properties.get(f);ue.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),a=null,r=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function B(U){for(let W=0;W<U.removed.length;W++){const J=U.removed[W],H=x.indexOf(J);H>=0&&(x[H]=null,_[H].dispatchEvent({type:"disconnected",data:J}))}for(let W=0;W<U.added.length;W++){const J=U.added[W];let H=x.indexOf(J);if(H===-1){for(let ue=0;ue<_.length;ue++)if(ue>=x.length){x.push(J),H=ue;break}else if(x[ue]===null){x[ue]=J,H=ue;break}if(H===-1)break}const ee=_[H];ee&&ee.dispatchEvent({type:"connected",data:J})}}const K=new N,D=new N;function P(U,W,J){K.setFromMatrixPosition(W.matrixWorld),D.setFromMatrixPosition(J.matrixWorld);const H=K.distanceTo(D),ee=W.projectionMatrix.elements,ue=J.projectionMatrix.elements,ge=ee[14]/(ee[10]-1),Z=ee[14]/(ee[10]+1),Pe=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],Me=(ee[8]-1)/ee[0],pe=(ue[8]+1)/ue[0],Be=ge*Me,Ee=ge*pe,me=H/(-Me+pe),Ke=me*-Me;W.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ke),U.translateZ(me),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const at=ge+me,tt=Z+me,yt=Be-Ke,nt=Ee+(H-Ke),Ue=Pe*Z/tt*at,Lt=_e*Z/tt*at;U.projectionMatrix.makePerspective(yt,nt,Ue,Lt,at,tt)}function F(U,W){W===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(W.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;S.near=b.near=w.near=U.near,S.far=b.far=w.far=U.far,(R!==S.near||y!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,y=S.far);const W=U.parent,J=S.cameras;F(S,W);for(let ee=0;ee<J.length;ee++)F(J[ee],W);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),U.position.copy(S.position),U.quaternion.copy(S.quaternion),U.scale.copy(S.scale),U.matrix.copy(S.matrix),U.matrixWorld.copy(S.matrixWorld);const H=U.children;for(let ee=0,ue=H.length;ee<ue;ee++)H[ee].updateMatrixWorld(!0);J.length===2?P(S,w,b):S.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(U){d!==null&&(d.fixedFoveation=U),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=U)};let I=null;function q(U,W){if(l=W.getViewerPose(a||r),p=W,l!==null){const J=l.views;u!==null&&(e.setRenderTargetFramebuffer(f,u.framebuffer),e.setRenderTarget(f));let H=!1;J.length!==S.cameras.length&&(S.cameras.length=0,H=!0);for(let ee=0;ee<J.length;ee++){const ue=J[ee];let ge=null;if(u!==null)ge=u.getViewport(ue);else{const Pe=h.getViewSubImage(d,ue);ge=Pe.viewport,ee===0&&(e.setRenderTargetTextures(f,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(f))}let Z=v[ee];Z===void 0&&(Z=new pt,Z.layers.enable(ee),Z.viewport=new He,v[ee]=Z),Z.matrix.fromArray(ue.transform.matrix),Z.projectionMatrix.fromArray(ue.projectionMatrix),Z.viewport.set(ge.x,ge.y,ge.width,ge.height),ee===0&&S.matrix.copy(Z.matrix),H===!0&&S.cameras.push(Z)}}for(let J=0;J<_.length;J++){const H=x[J],ee=_[J];H!==null&&ee!==void 0&&ee.update(H,W,a||r)}I&&I(U,W),p=null}const k=new Ec;k.setAnimationLoop(q),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}}function xg(c,e){function t(m,f){m.fogColor.value.copy(f.color),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(m,f):f.isMeshToonMaterial?(i(m,f),h(m,f)):f.isMeshPhongMaterial?(i(m,f),l(m,f)):f.isMeshStandardMaterial?(i(m,f),d(m,f),f.isMeshPhysicalMaterial&&u(m,f,w)):f.isMeshMatcapMaterial?(i(m,f),p(m,f)):f.isMeshDepthMaterial?i(m,f):f.isMeshDistanceMaterial?(i(m,f),g(m,f)):f.isMeshNormalMaterial?i(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?o(m,f,_,x):f.isSpriteMaterial?a(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.bumpMap&&(m.bumpMap.value=f.bumpMap,m.bumpScale.value=f.bumpScale,f.side===Wt&&(m.bumpScale.value*=-1)),f.displacementMap&&(m.displacementMap.value=f.displacementMap,m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap),f.normalMap&&(m.normalMap.value=f.normalMap,m.normalScale.value.copy(f.normalScale),f.side===Wt&&m.normalScale.value.negate()),f.specularMap&&(m.specularMap.value=f.specularMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const b=c.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let w;f.aoMap?w=f.aoMap:f.lightMap&&(w=f.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function o(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w;f.map?w=f.map:f.alphaMap&&(w=f.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.roughness.value=f.roughness,m.metalness.value=f.metalness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function u(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),m.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Wt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap)}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){m.referencePosition.value.copy(f.referencePosition),m.nearDistance.value=f.nearDistance,m.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function vg(c,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?c.getParameter(35375):0;function a(x,w){const b=w.program;n.uniformBlockBinding(x,b)}function l(x,w){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",f));const v=w.program;n.updateUBOMapping(x,v);const S=e.render.frame;s[x.id]!==S&&(u(x),s[x.id]=S)}function h(x){const w=d();x.__bindingPointIndex=w;const b=c.createBuffer(),v=x.__size,S=x.usage;return c.bindBuffer(35345,b),c.bufferData(35345,v,S),c.bindBuffer(35345,null),c.bindBufferBase(35345,w,b),b}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const w=i[x.id],b=x.uniforms,v=x.__cache;c.bindBuffer(35345,w);for(let S=0,R=b.length;S<R;S++){const y=b[S];if(p(y,S,v)===!0){const C=y.value,O=y.__offset;typeof C=="number"?(y.__data[0]=C,c.bufferSubData(35345,O,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):C.toArray(y.__data),c.bufferSubData(35345,O,y.__data))}}c.bindBuffer(35345,null)}function p(x,w,b){const v=x.value;if(b[w]===void 0)return typeof v=="number"?b[w]=v:b[w]=v.clone(),!0;if(typeof v=="number"){if(b[w]!==v)return b[w]=v,!0}else{const S=b[w];if(S.equals(v)===!1)return S.copy(v),!0}return!1}function g(x){const w=x.uniforms;let b=0;const v=16;let S=0;for(let R=0,y=w.length;R<y;R++){const C=w[R],O=m(C);if(C.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,R>0){S=b%v;const B=v-S;S!==0&&B-O.boundary<0&&(b+=v-S,C.__offset=b)}b+=O.storage}return S=b%v,S>0&&(b+=v-S),x.__size=b,x.__cache={},this}function m(x){const w=x.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function f(x){const w=x.target;w.removeEventListener("dispose",f);const b=r.indexOf(w.__bindingPointIndex);r.splice(b,1),c.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function _(){for(const x in i)c.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:a,update:l,dispose:_}}function yg(){const c=xs("canvas");return c.style.display="block",c}function Pc(c={}){this.isWebGLRenderer=!0;const e=c.canvas!==void 0?c.canvas:yg(),t=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,r=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=c.alpha!==void 0?c.alpha:!1;let d=null,u=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ei,this.physicallyCorrectLights=!1,this.toneMapping=gn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let f=!1,_=0,x=0,w=null,b=-1,v=null;const S=new He,R=new He;let y=null,C=e.width,O=e.height,B=1,K=null,D=null;const P=new He(0,0,C,O),F=new He(0,0,C,O);let I=!1;const q=new Oo;let k=!1,U=!1,W=null;const J=new Fe,H=new ye,ee=new N,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return w===null?B:1}let Z=t;function Pe(A,G){for(let j=0;j<A.length;j++){const V=A[j],$=e.getContext(V,G);if($!==null)return $}return null}try{const A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Io}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",Re,!1),e.addEventListener("webglcontextcreationerror",qe,!1),Z===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),Z=Pe(G,A),Z===null)throw Pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Me,pe,Be,Ee,me,Ke,at,tt,yt,nt,Ue,Lt,Mt,L,E,Y,te,ne,ae,xe,T,Q,ie;function le(){_e=new Rp(Z),Me=new Sp(Z,_e,c),_e.init(Me),T=new fg(Z,_e,Me),pe=new ug(Z,_e,Me),Be=new Dp,Ee=new $m,me=new dg(Z,_e,pe,Ee,Me,T,Be),Ke=new Tp(m),at=new Lp(m),tt=new Wu(Z,Me),Q=new bp(Z,_e,tt,Me),yt=new Pp(Z,tt,Be,Q),nt=new Op(Z,yt,tt,Be),ne=new zp(Z,Me,me),E=new Ep(Ee),Ue=new Zm(m,Ke,at,_e,Me,Q,E),Lt=new xg(m,Ee),Mt=new Qm,L=new rg(_e,Me),te=new Mp(m,Ke,pe,nt,h,r),Y=new hg(m,nt,Me),ie=new vg(Z,Be,Me,pe),ae=new wp(Z,_e,Be,Me),xe=new Ip(Z,_e,Be,Me),Be.programs=Ue.programs,m.capabilities=Me,m.extensions=_e,m.properties=Ee,m.renderLists=Mt,m.shadowMap=Y,m.state=pe,m.info=Be}le();const oe=new _g(m,Z);this.xr=oe,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(C,O,!1))},this.getSize=function(A){return A.set(C,O)},this.setSize=function(A,G,j){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,O=G,e.width=Math.floor(A*B),e.height=Math.floor(G*B),j!==!1&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(C*B,O*B).floor()},this.setDrawingBufferSize=function(A,G,j){C=A,O=G,B=j,e.width=Math.floor(A*j),e.height=Math.floor(G*j),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,G,j,V){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,G,j,V),pe.viewport(S.copy(P).multiplyScalar(B).floor())},this.getScissor=function(A){return A.copy(F)},this.setScissor=function(A,G,j,V){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,G,j,V),pe.scissor(R.copy(F).multiplyScalar(B).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(A){pe.setScissorTest(I=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){D=A},this.getClearColor=function(A){return A.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(A=!0,G=!0,j=!0){let V=0;A&&(V|=16384),G&&(V|=256),j&&(V|=1024),Z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",Re,!1),e.removeEventListener("webglcontextcreationerror",qe,!1),Mt.dispose(),L.dispose(),Ee.dispose(),Ke.dispose(),at.dispose(),nt.dispose(),Q.dispose(),ie.dispose(),Ue.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",De),oe.removeEventListener("sessionend",rt),W&&(W.dispose(),W=null),Ye.stop()};function ve(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const A=Be.autoReset,G=Y.enabled,j=Y.autoUpdate,V=Y.needsUpdate,$=Y.type;le(),Be.autoReset=A,Y.enabled=G,Y.autoUpdate=j,Y.needsUpdate=V,Y.type=$}function qe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function z(A){const G=A.target;G.removeEventListener("dispose",z),se(G)}function se(A){X(A),Ee.remove(A)}function X(A){const G=Ee.get(A).programs;G!==void 0&&(G.forEach(function(j){Ue.releaseProgram(j)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,j,V,$,be){G===null&&(G=ue);const Se=$.isMesh&&$.matrixWorld.determinant()<0,Ae=lh(A,G,j,V,$);pe.setMaterial(V,Se);let Te=j.index;const ke=j.attributes.position;if(Te===null){if(ke===void 0||ke.count===0)return}else if(Te.count===0)return;let Ie=1;V.wireframe===!0&&(Te=yt.getWireframeAttribute(j),Ie=2),Q.setup($,V,Ae,j,Te);let Ne,Xe=ae;Te!==null&&(Ne=tt.get(Te),Xe=xe,Xe.setIndex(Ne));const zn=Te!==null?Te.count:ke.count,ci=j.drawRange.start*Ie,hi=j.drawRange.count*Ie,Kt=be!==null?be.start*Ie:0,Oe=be!==null?be.count*Ie:1/0,ui=Math.max(ci,Kt),Ze=Math.min(zn,ci+hi,Kt+Oe)-1,Pt=Math.max(0,Ze-ui+1);if(Pt!==0){if($.isMesh)V.wireframe===!0?(pe.setLineWidth(V.wireframeLinewidth*ge()),Xe.setMode(1)):Xe.setMode(4);else if($.isLine){let vn=V.linewidth;vn===void 0&&(vn=1),pe.setLineWidth(vn*ge()),$.isLineSegments?Xe.setMode(1):$.isLineLoop?Xe.setMode(2):Xe.setMode(3)}else $.isPoints?Xe.setMode(0):$.isSprite&&Xe.setMode(4);if($.isInstancedMesh)Xe.renderInstances(ui,Pt,$.count);else if(j.isInstancedBufferGeometry){const vn=Math.min(j.instanceCount,j._maxInstanceCount);Xe.renderInstances(ui,Pt,vn)}else Xe.render(ui,Pt)}},this.compile=function(A,G){u=L.get(A),u.init(),g.push(u),A.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(u.pushLight(j),j.castShadow&&u.pushShadow(j))}),u.setupLights(m.physicallyCorrectLights),A.traverse(function(j){const V=j.material;if(V)if(Array.isArray(V))for(let $=0;$<V.length;$++){const be=V[$];br(be,A,j)}else br(V,A,j)}),g.pop(),u=null};let he=null;function ce(A){he&&he(A)}function De(){Ye.stop()}function rt(){Ye.start()}const Ye=new Ec;Ye.setAnimationLoop(ce),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(A){he=A,oe.setAnimationLoop(A),A===null?Ye.stop():Ye.start()},oe.addEventListener("sessionstart",De),oe.addEventListener("sessionend",rt),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(G),G=oe.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,G,w),u=L.get(A,g.length),u.init(),g.push(u),J.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(J),U=this.localClippingEnabled,k=E.init(this.clippingPlanes,U,G),d=Mt.get(A,p.length),d.init(),p.push(d),xn(A,G,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(K,D),k===!0&&E.beginShadows();const j=u.state.shadowsArray;if(Y.render(j,A,G),k===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(d,A),u.setupLights(m.physicallyCorrectLights),G.isArrayCamera){const V=G.cameras;for(let $=0,be=V.length;$<be;$++){const Se=V[$];je(d,A,Se,Se.viewport)}}else je(d,A,G);w!==null&&(me.updateMultisampleRenderTarget(w),me.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(m,A,G),Q.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,p.pop(),p.length>0?d=p[p.length-1]:d=null};function xn(A,G,j,V){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)u.pushLight(A),A.castShadow&&u.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){V&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Se=nt.update(A),Ae=A.material;Ae.visible&&d.push(A,Se,Ae,j,ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Be.render.frame&&(A.skeleton.update(),A.skeleton.frame=Be.render.frame),!A.frustumCulled||q.intersectsObject(A))){V&&ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const Se=nt.update(A),Ae=A.material;if(Array.isArray(Ae)){const Te=Se.groups;for(let ke=0,Ie=Te.length;ke<Ie;ke++){const Ne=Te[ke],Xe=Ae[Ne.materialIndex];Xe&&Xe.visible&&d.push(A,Se,Xe,j,ee.z,Ne)}}else Ae.visible&&d.push(A,Se,Ae,j,ee.z,null)}}const be=A.children;for(let Se=0,Ae=be.length;Se<Ae;Se++)xn(be[Se],G,j,V)}function je(A,G,j,V){const $=A.opaque,be=A.transmissive,Se=A.transparent;u.setupLightsView(j),be.length>0&&tn($,G,j),V&&pe.viewport(S.copy(V)),$.length>0&&Rt($,G,j),be.length>0&&Rt(be,G,j),Se.length>0&&Rt(Se,G,j),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function tn(A,G,j){const V=Me.isWebGL2;W===null&&(W=new ti(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ms:Qn,minFilter:Wi,samples:V&&s===!0?4:0})),m.getDrawingBufferSize(H),V?W.setSize(H.x,H.y):W.setSize(cr(H.x),cr(H.y));const $=m.getRenderTarget();m.setRenderTarget(W),m.clear();const be=m.toneMapping;m.toneMapping=gn,Rt(A,G,j),m.toneMapping=be,me.updateMultisampleRenderTarget(W),me.updateRenderTargetMipmap(W),m.setRenderTarget($)}function Rt(A,G,j){const V=G.isScene===!0?G.overrideMaterial:null;for(let $=0,be=A.length;$<be;$++){const Se=A[$],Ae=Se.object,Te=Se.geometry,ke=V===null?Se.material:V,Ie=Se.group;Ae.layers.test(j.layers)&&ah(Ae,G,j,Te,ke,Ie)}}function ah(A,G,j,V,$,be){A.onBeforeRender(m,G,j,V,$,be),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(m,G,j,V,A,be),$.transparent===!0&&$.side===Jn?($.side=Wt,$.needsUpdate=!0,m.renderBufferDirect(j,G,V,$,A,be),$.side=zi,$.needsUpdate=!0,m.renderBufferDirect(j,G,V,$,A,be),$.side=Jn):m.renderBufferDirect(j,G,V,$,A,be),A.onAfterRender(m,G,j,V,$,be)}function br(A,G,j){G.isScene!==!0&&(G=ue);const V=Ee.get(A),$=u.state.lights,be=u.state.shadowsArray,Se=$.state.version,Ae=Ue.getParameters(A,$.state,be,G,j),Te=Ue.getProgramCacheKey(Ae);let ke=V.programs;V.environment=A.isMeshStandardMaterial?G.environment:null,V.fog=G.fog,V.envMap=(A.isMeshStandardMaterial?at:Ke).get(A.envMap||V.environment),ke===void 0&&(A.addEventListener("dispose",z),ke=new Map,V.programs=ke);let Ie=ke.get(Te);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===Se)return ea(A,Ae),Ie}else Ae.uniforms=Ue.getUniforms(A),A.onBuild(j,Ae,m),A.onBeforeCompile(Ae,m),Ie=Ue.acquireProgram(Ae,Te),ke.set(Te,Ie),V.uniforms=Ae.uniforms;const Ne=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=E.uniform),ea(A,Ae),V.needsLights=hh(A),V.lightsStateVersion=Se,V.needsLights&&(Ne.ambientLightColor.value=$.state.ambient,Ne.lightProbe.value=$.state.probe,Ne.directionalLights.value=$.state.directional,Ne.directionalLightShadows.value=$.state.directionalShadow,Ne.spotLights.value=$.state.spot,Ne.spotLightShadows.value=$.state.spotShadow,Ne.rectAreaLights.value=$.state.rectArea,Ne.ltc_1.value=$.state.rectAreaLTC1,Ne.ltc_2.value=$.state.rectAreaLTC2,Ne.pointLights.value=$.state.point,Ne.pointLightShadows.value=$.state.pointShadow,Ne.hemisphereLights.value=$.state.hemi,Ne.directionalShadowMap.value=$.state.directionalShadowMap,Ne.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ne.spotShadowMap.value=$.state.spotShadowMap,Ne.spotShadowMatrix.value=$.state.spotShadowMatrix,Ne.pointShadowMap.value=$.state.pointShadowMap,Ne.pointShadowMatrix.value=$.state.pointShadowMatrix);const Xe=Ie.getUniforms(),zn=ar.seqWithValue(Xe.seq,Ne);return V.currentProgram=Ie,V.uniformsList=zn,Ie}function ea(A,G){const j=Ee.get(A);j.outputEncoding=G.outputEncoding,j.instancing=G.instancing,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function lh(A,G,j,V,$){G.isScene!==!0&&(G=ue),me.resetTextureUnits();const be=G.fog,Se=V.isMeshStandardMaterial?G.environment:null,Ae=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ei,Te=(V.isMeshStandardMaterial?at:Ke).get(V.envMap||Se),ke=V.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ie=!!V.normalMap&&!!j.attributes.tangent,Ne=!!j.morphAttributes.position,Xe=!!j.morphAttributes.normal,zn=!!j.morphAttributes.color,ci=V.toneMapped?m.toneMapping:gn,hi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Kt=hi!==void 0?hi.length:0,Oe=Ee.get(V),ui=u.state.lights;if(k===!0&&(U===!0||A!==v)){const bt=A===v&&V.id===b;E.setState(V,A,bt)}let Ze=!1;V.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==ui.state.version||Oe.outputEncoding!==Ae||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Te||V.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==E.numPlanes||Oe.numIntersection!==E.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ie||Oe.morphTargets!==Ne||Oe.morphNormals!==Xe||Oe.morphColors!==zn||Oe.toneMapping!==ci||Me.isWebGL2===!0&&Oe.morphTargetsCount!==Kt)&&(Ze=!0):(Ze=!0,Oe.__version=V.version);let Pt=Oe.currentProgram;Ze===!0&&(Pt=br(V,G,$));let vn=!1,Ji=!1,wr=!1;const dt=Pt.getUniforms(),Qi=Oe.uniforms;if(pe.useProgram(Pt.program)&&(vn=!0,Ji=!0,wr=!0),V.id!==b&&(b=V.id,Ji=!0),vn||v!==A){if(dt.setValue(Z,"projectionMatrix",A.projectionMatrix),Me.logarithmicDepthBuffer&&dt.setValue(Z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),v!==A&&(v=A,Ji=!0,wr=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const bt=dt.map.cameraPosition;bt!==void 0&&bt.setValue(Z,ee.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&dt.setValue(Z,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||$.isSkinnedMesh)&&dt.setValue(Z,"viewMatrix",A.matrixWorldInverse)}if($.isSkinnedMesh){dt.setOptional(Z,$,"bindMatrix"),dt.setOptional(Z,$,"bindMatrixInverse");const bt=$.skeleton;bt&&(Me.floatVertexTextures?(bt.boneTexture===null&&bt.computeBoneTexture(),dt.setValue(Z,"boneTexture",bt.boneTexture,me),dt.setValue(Z,"boneTextureSize",bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sr=j.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&Me.isWebGL2===!0)&&ne.update($,j,V,Pt),(Ji||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,dt.setValue(Z,"receiveShadow",$.receiveShadow)),Ji&&(dt.setValue(Z,"toneMappingExposure",m.toneMappingExposure),Oe.needsLights&&ch(Qi,wr),be&&V.fog===!0&&Lt.refreshFogUniforms(Qi,be),Lt.refreshMaterialUniforms(Qi,V,B,O,W),ar.upload(Z,Oe.uniformsList,Qi,me)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ar.upload(Z,Oe.uniformsList,Qi,me),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&dt.setValue(Z,"center",$.center),dt.setValue(Z,"modelViewMatrix",$.modelViewMatrix),dt.setValue(Z,"normalMatrix",$.normalMatrix),dt.setValue(Z,"modelMatrix",$.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const bt=V.uniformsGroups;for(let Er=0,uh=bt.length;Er<uh;Er++)if(Me.isWebGL2){const ta=bt[Er];ie.update(ta,Pt),ie.bind(ta,Pt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pt}function ch(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function hh(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,G,j){Ee.get(A.texture).__webglTexture=G,Ee.get(A.depthTexture).__webglTexture=j;const V=Ee.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=j===void 0,V.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const j=Ee.get(A);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,j=0){w=A,_=G,x=j;let V=!0;if(A){const Te=Ee.get(A);Te.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),V=!1):Te.__webglFramebuffer===void 0?me.setupRenderTarget(A):Te.__hasExternalTextures&&me.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture)}let $=null,be=!1,Se=!1;if(A){const Te=A.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(Se=!0);const ke=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?($=ke[G],be=!0):Me.isWebGL2&&A.samples>0&&me.useMultisampledRTT(A)===!1?$=Ee.get(A).__webglMultisampledFramebuffer:$=ke,S.copy(A.viewport),R.copy(A.scissor),y=A.scissorTest}else S.copy(P).multiplyScalar(B).floor(),R.copy(F).multiplyScalar(B).floor(),y=I;if(pe.bindFramebuffer(36160,$)&&Me.drawBuffers&&V&&pe.drawBuffers(A,$),pe.viewport(S),pe.scissor(R),pe.setScissorTest(y),be){const Te=Ee.get(A.texture);Z.framebufferTexture2D(36160,36064,34069+G,Te.__webglTexture,j)}else if(Se){const Te=Ee.get(A.texture),ke=G||0;Z.framebufferTextureLayer(36160,36064,Te.__webglTexture,j||0,ke)}b=-1},this.readRenderTargetPixels=function(A,G,j,V,$,be,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){pe.bindFramebuffer(36160,Ae);try{const Te=A.texture,ke=Te.format,Ie=Te.type;if(ke!==Vt&&T.convert(ke)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=Ie===ms&&(_e.has("EXT_color_buffer_half_float")||Me.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ie!==Qn&&T.convert(Ie)!==Z.getParameter(35738)&&!(Ie===Pn&&(Me.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-V&&j>=0&&j<=A.height-$&&Z.readPixels(G,j,V,$,T.convert(ke),T.convert(Ie),be)}finally{const Te=w!==null?Ee.get(w).__webglFramebuffer:null;pe.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(A,G,j=0){const V=Math.pow(2,-j),$=Math.floor(G.image.width*V),be=Math.floor(G.image.height*V);me.setTexture2D(G,0),Z.copyTexSubImage2D(3553,j,0,0,A.x,A.y,$,be),pe.unbindTexture()},this.copyTextureToTexture=function(A,G,j,V=0){const $=G.image.width,be=G.image.height,Se=T.convert(j.format),Ae=T.convert(j.type);me.setTexture2D(j,0),Z.pixelStorei(37440,j.flipY),Z.pixelStorei(37441,j.premultiplyAlpha),Z.pixelStorei(3317,j.unpackAlignment),G.isDataTexture?Z.texSubImage2D(3553,V,A.x,A.y,$,be,Se,Ae,G.image.data):G.isCompressedTexture?Z.compressedTexSubImage2D(3553,V,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Se,G.mipmaps[0].data):Z.texSubImage2D(3553,V,A.x,A.y,Se,Ae,G.image),V===0&&j.generateMipmaps&&Z.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(A,G,j,V,$=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Ae=A.max.z-A.min.z+1,Te=T.convert(V.format),ke=T.convert(V.type);let Ie;if(V.isData3DTexture)me.setTexture3D(V,0),Ie=32879;else if(V.isDataArrayTexture)me.setTexture2DArray(V,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,V.flipY),Z.pixelStorei(37441,V.premultiplyAlpha),Z.pixelStorei(3317,V.unpackAlignment);const Ne=Z.getParameter(3314),Xe=Z.getParameter(32878),zn=Z.getParameter(3316),ci=Z.getParameter(3315),hi=Z.getParameter(32877),Kt=j.isCompressedTexture?j.mipmaps[0]:j.image;Z.pixelStorei(3314,Kt.width),Z.pixelStorei(32878,Kt.height),Z.pixelStorei(3316,A.min.x),Z.pixelStorei(3315,A.min.y),Z.pixelStorei(32877,A.min.z),j.isDataTexture||j.isData3DTexture?Z.texSubImage3D(Ie,$,G.x,G.y,G.z,be,Se,Ae,Te,ke,Kt.data):j.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ie,$,G.x,G.y,G.z,be,Se,Ae,Te,Kt.data)):Z.texSubImage3D(Ie,$,G.x,G.y,G.z,be,Se,Ae,Te,ke,Kt),Z.pixelStorei(3314,Ne),Z.pixelStorei(32878,Xe),Z.pixelStorei(3316,zn),Z.pixelStorei(3315,ci),Z.pixelStorei(32877,hi),$===0&&V.generateMipmaps&&Z.generateMipmap(Ie),pe.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?me.setTextureCube(A,0):A.isData3DTexture?me.setTexture3D(A,0):A.isDataArrayTexture?me.setTexture2DArray(A,0):me.setTexture2D(A,0),pe.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,pe.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Mg extends Pc{}Mg.prototype.isWebGL1Renderer=!0;class bg extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class wg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ft=new N;class Go{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Go(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const fl=new N,pl=new He,ml=new He,Sg=new N,gl=new Fe;class Eg extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;pl.fromBufferAttribute(i.attributes.skinIndex,e),ml.fromBufferAttribute(i.attributes.skinWeight,e),fl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=ml.getComponent(s);if(r!==0){const o=pl.getComponent(s);gl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Sg.copy(fl).applyMatrix4(gl),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ic extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Tg extends mt{constructor(e=null,t=1,n=1,i,s,r,o,a,l=lt,h=lt,d,u){super(null,r,o,a,l,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _l=new Fe,Ag=new Fe;class Vo{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:Ag;_l.multiplyMatrices(o,t[s]),_l.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Vo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=gc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Tg(t,e,e,Vt,Pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Ic),this.bones.push(r),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Dc extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new N,vl=new N,yl=new Fe,so=new mr,$s=new ji;class Ho extends et{constructor(e=new Yt,t=new Dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)xl.fromBufferAttribute(t,i-1),vl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(vl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;yl.copy(i).invert(),so.copy(e.ray).applyMatrix4(yl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new N,h=new N,d=new N,u=new N,p=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){const _=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let w=_,b=x-1;w<b;w+=p){const v=g.getX(w),S=g.getX(w+1);if(l.fromBufferAttribute(f,v),h.fromBufferAttribute(f,S),so.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(u);y<e.near||y>e.far||t.push({distance:y,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let w=_,b=x-1;w<b;w+=p){if(l.fromBufferAttribute(f,w),h.fromBufferAttribute(f,w+1),so.distanceSqToSegment(l,h,u,d)>a)continue;u.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(u);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ml=new N,bl=new N;class Cg extends Ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ml.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ml.distanceTo(bl);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends Ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Nc extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wl=new Fe,Eo=new mr,Js=new ji,Qs=new N;class Rg extends et{constructor(e=new Yt,t=new Nc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(i),Js.radius+=s,e.ray.intersectsSphere(Js)===!1)return;wl.copy(i).invert(),Eo.copy(e.ray).applyMatrix4(wl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,r.start),p=Math.min(l.count,r.start+r.count);for(let g=u,m=p;g<m;g++){const f=l.getX(g);Qs.fromBufferAttribute(d,f),Sl(Qs,f,a,i,e,t,this)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=u,m=p;g<m;g++)Qs.fromBufferAttribute(d,g),Sl(Qs,g,a,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sl(c,e,t,n,i,s,r){const o=Eo.distanceSqToPoint(c);if(o<t){const a=new N;Eo.closestPointToPoint(c,a),a.applyMatrix4(n);const l=i.ray.origin.distanceTo(a);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:a,index:e,face:null,object:r})}}class Wo extends Yt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let l=0;const h=[],d=new N,u=new N,p=[],g=[],m=[],f=[];for(let _=0;_<=n;_++){const x=[],w=_/n;let b=0;_==0&&r==0?b=.5/t:_==n&&a==Math.PI&&(b=-.5/t);for(let v=0;v<=t;v++){const S=v/t;d.x=-e*Math.cos(i+S*s)*Math.sin(r+w*o),d.y=e*Math.cos(r+w*o),d.z=e*Math.sin(i+S*s)*Math.sin(r+w*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),f.push(S+b,1-w),x.push(l++)}h.push(x)}for(let _=0;_<n;_++)for(let x=0;x<t;x++){const w=h[_][x+1],b=h[_][x],v=h[_+1][x],S=h[_+1][x+1];(_!==0||r>0)&&p.push(w,b,S),(_!==n-1||a<Math.PI)&&p.push(b,v,S)}this.setIndex(p),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(m,3)),this.setAttribute("uv",new zt(f,2))}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oi extends _r{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pg extends jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new we(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function An(c,e,t){return Fc(c)?new c.constructor(c.subarray(e,t!==void 0?t:c.length)):c.slice(e,t)}function er(c,e,t){return!c||!t&&c.constructor===e?c:typeof e.BYTES_PER_ELEMENT=="number"?new e(c):Array.prototype.slice.call(c)}function Fc(c){return ArrayBuffer.isView(c)&&!(c instanceof DataView)}function Ig(c){function e(i,s){return c[i]-c[s]}const t=c.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function El(c,e,t){const n=c.length,i=new c.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let a=0;a!==e;++a)i[r++]=c[o+a]}return i}function zc(c,e,t,n){let i=1,s=c[0];for(;s!==void 0&&s[n]===void 0;)s=c[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=c[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=c[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=c[i++];while(s!==void 0)}class Es{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dg extends Es{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:La,endingEnd:La}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case Ra:s=e,o=2*t-n;break;case Pa:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case Ra:r=e,a=2*n-t;break;case Pa:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),m=g*g,f=m*g,_=-u*f+2*u*m-u*g,x=(1+u)*f+(-1.5-2*u)*m+(-.5+u)*g+1,w=(-1-p)*f+(1.5+p)*m+.5*g,b=p*f-p*m;for(let v=0;v!==o;++v)s[v]=_*r[h+v]+x*r[l+v]+w*r[a+v]+b*r[d+v];return s}}class Ng extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[l+u]*d+r[a+u]*h;return s}}class Fg extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class en{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=er(t,this.TimeBufferType),this.values=er(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:er(e.times,Array),values:er(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ng(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case gs:t=this.InterpolantFactoryMethodDiscrete;break;case ki:t=this.InterpolantFactoryMethodLinear;break;case Rr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gs;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return Rr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=An(n,s,r),this.values=An(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0&&Fc(i))for(let o=0,a=i.length;o!==a;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=An(this.times),t=An(this.values),n=this.getValueSize(),i=this.getInterpolation()===Rr,s=e.length-1;let r=1;for(let o=1;o<s;++o){let a=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)a=!0;else{const d=o*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[u+g]||m!==t[p+g]){a=!0;break}}}if(a){if(o!==r){e[r]=e[o];const d=o*n,u=r*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}return r!==e.length?(this.times=An(e,0,r),this.values=An(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=An(this.times,0),t=An(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=ki;class Ki extends en{}Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=gs;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Oc extends en{}Oc.prototype.ValueTypeName="color";class vs extends en{}vs.prototype.ValueTypeName="number";class zg extends Es{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)_n.slerpFlat(s,0,r,l-o,r,l,a);return s}}class ii extends en{InterpolantFactoryMethodLinear(e){return new zg(this.times,this.values,this.getValueSize(),e)}}ii.prototype.ValueTypeName="quaternion";ii.prototype.DefaultInterpolation=ki;ii.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends en{}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=gs;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends en{}ys.prototype.ValueTypeName="vector";class Og{constructor(e,t=-1,n,i=iu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Ug(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(en.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let a=[],l=[];a.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Ig(a);a=El(a,1,h),l=El(l,1,h),!i&&a[0]===0&&(a.push(s),l.push(l[0])),r.push(new vs(".morphTargetInfluences["+t[o].name+"]",a,l).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,a=e.length;o<a;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,p,g,m){if(p.length!==0){const f=[],_=[];zc(p,f,_,g),f.length!==0&&m.push(new d(u,f,_))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let a=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let m=0;m<u[g].morphTargets.length;m++)p[u[g].morphTargets[m]]=-1;for(const m in p){const f=[],_=[];for(let x=0;x!==u[g].morphTargets.length;++x){const w=u[g];f.push(w.time),_.push(w.morphTarget===m?1:0)}i.push(new vs(".morphTargetInfluence["+m+"]",f,_))}a=p.length*r}else{const p=".bones["+t[d].name+"]";n(ys,p+".position",u,"pos",i),n(ii,p+".quaternion",u,"rot",i),n(ys,p+".scale",u,"scl",i)}}return i.length===0?null:new this(s,a,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bg(c){switch(c.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return ys;case"color":return Oc;case"quaternion":return ii;case"bool":case"boolean":return Ki;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+c)}function Ug(c){if(c.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bg(c.type);if(c.times===void 0){const t=[],n=[];zc(c.keys,t,n,"value"),c.times=t,c.values=n}return e.parse!==void 0?e.parse(c):new e(c.name,c.times,c.values,c.interpolation)}const Vi={enabled:!1,files:{},add:function(c,e){this.enabled!==!1&&(this.files[c]=e)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class Bc{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,a;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const kg=new Bc;class $i{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const ln={};class Gg extends Error{constructor(e,t){super(e),this.response=t}}class Uc extends $i{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:i});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,a=this.responseType;fetch(r).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ln[e],d=l.body.getReader(),u=l.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let m=0;const f=new ReadableStream({start(_){x();function x(){d.read().then(({done:w,value:b})=>{if(w)_.close();else{m+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:p});for(let S=0,R=h.length;S<R;S++){const y=h[S];y.onProgress&&y.onProgress(v)}_.enqueue(b),x()}})}}});return new Response(f)}else throw new Gg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(a){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Vi.add(e,l);const h=ln[e];delete ln[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=ln[e];if(h===void 0)throw this.manager.itemError(e),l;delete ln[e];for(let d=0,u=h.length;d<u;d++){const p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class kc extends $i{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Vi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=xs("img");function a(){h(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",a,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Vg extends $i{constructor(e){super(e)}load(e,t,n,i){const s=new zo,r=new kc(this.manager);r.setCrossOrigin(this.crossOrigin),r.setPath(this.path);let o=0;function a(l){r.load(e[l],function(h){s.images[l]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)a(l);return s}}class Gc extends $i{constructor(e){super(e)}load(e,t,n,i){const s=new mt,r=new kc(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class xr extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Tl=new Fe,Al=new N,Cl=new N;class qo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oo,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Al.setFromMatrixPosition(e.matrixWorld),t.position.copy(Al),Cl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cl),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hg extends qo{constructor(){super(new pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vc extends xr{constructor(e,t,n=0,i=Math.PI/3,s=0,r=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.shadow=new Hg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ll=new Fe,is=new N,ro=new N;class Wg extends qo{constructor(){super(new pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(e.matrixWorld),n.position.copy(is),ro.copy(n.position),ro.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ro),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class qg extends xr{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jg extends qo{constructor(){super(new Uo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xg extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DefaultUp),this.updateMatrix(),this.target=new et,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yg extends xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class $n{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Kg extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Vi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(a){return a.blob()}).then(function(a){return createImageBitmap(a,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(a){Vi.add(e,a),t&&t(a),s.manager.itemEnd(e)}).catch(function(a){i&&i(a),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Zg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rl(){return(typeof performance>"u"?Date:performance).now()}const jo="\\[\\]\\.:\\/",$g=new RegExp("["+jo+"]","g"),Xo="[^"+jo+"]",Jg="[^"+jo.replace("\\.","")+"]",Qg=/((?:WC+[\/:])*)/.source.replace("WC",Xo),e0=/(WCOD+)?/.source.replace("WCOD",Jg),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xo),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xo),i0=new RegExp("^"+Qg+e0+t0+n0+"$"),s0=["material","materials","bones"];class r0{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace($g,"")}static parseTrackName(e){const t=i0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);s0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const r=e[i];if(r===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=r0;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class o0{constructor(e,t,n=0,i=1/0){this.ray=new mr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return To(e,this,n,t),n.sort(Pl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)To(e[i],this,n,t);return n.sort(Pl),n}}function Pl(c,e){return c.distance-e.distance}function To(c,e,t,n){if(c.layers.test(e.layers)&&c.raycast(e,t),n===!0){const i=c.children;for(let s=0,r=i.length;s<r;s++)To(i[s],e,t,!0)}}class Il{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Io}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Io);class Ht{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,r=e.z;return t.x=n[0]*i+n[1]*s+n[2]*r,t.y=n[3]*i+n[4]*s+n[5]*r,t.z=n[6]*i+n[7]*s+n[8]*r,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=e.elements,s=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],h=n[4],d=n[5],u=n[6],p=n[7],g=n[8],m=i[0],f=i[1],_=i[2],x=i[3],w=i[4],b=i[5],v=i[6],S=i[7],R=i[8];return s[0]=r*m+o*x+a*v,s[1]=r*f+o*w+a*S,s[2]=r*_+o*b+a*R,s[3]=l*m+h*x+d*v,s[4]=l*f+h*w+d*S,s[5]=l*_+h*b+d*R,s[6]=u*m+p*x+g*v,s[7]=u*f+p*w+g*S,s[8]=u*_+p*b+g*R,t}scale(e,t){t===void 0&&(t=new Ht);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=e.x,s[3+4*1]=e.y,s[3+4*2]=e.z;let a=3;const l=a;let h;const d=4;let u;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){h=d;do u=d-h,s[u+i*r]+=s[u+i*o];while(--h);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const p=s[r+i*o]/s[r+i*r];h=d;do u=d-h,s[u+i*o]=u<=r?0:s[u+i*o]-s[u+i*r]*p;while(--h)}}while(--a);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let n=0;n<9;n++)e+=this.elements[n]+t;return e}reverse(e){e===void 0&&(e=new Ht);const t=3,n=6,i=a0;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let l;const h=n;let d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){l=h;do d=h-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const u=i[s+n*r]/i[s+n*s];l=h;do d=h-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*u;while(--l)}}while(--o);s=2;do{r=s-1;do{const u=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*u;while(--l)}while(r--)}while(--s);s=2;do{const u=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*u;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[t+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,r,d)}while(r--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,r=t+t,o=n+n,a=i+i,l=t*r,h=t*o,d=t*a,u=n*o,p=n*a,g=i*a,m=s*r,f=s*o,_=s*a,x=this.elements;return x[3*0+0]=1-(u+g),x[3*0+1]=h-_,x[3*0+2]=d+f,x[3*1+0]=h+_,x[3*1+1]=1-(l+g),x[3*1+2]=p-m,x[3*2+0]=d-f,x[3*2+1]=p+m,x[3*2+2]=1-(l+u),this}transpose(e){e===void 0&&(e=new Ht);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const a0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z;return t.x=o*s-a*i,t.y=a*n-r*s,t.z=r*i-o*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ht([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return Math.sqrt((s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z;return(s-t)*(s-t)+(r-n)*(r-n)+(o-i)*(o-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=l0,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=c0;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,e)):(r.set(0,1,0),i.cross(r,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,r=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=r+(e.z-r)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Dl),Dl.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const l0=new M,c0=new M,Dl=new M;class Ct{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(e[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<e.length;a++){let l=e[a];o&&(o.vmult(l,Nl),l=Nl),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return t&&(t.vadd(s,s),t.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new Ct().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,r=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,r,o,a){const l=this.lowerBound,h=this.upperBound;e.copy(l),t.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),s.set(h.x,l.y,h.z),r.set(l.x,h.y,l.z),o.set(l.x,l.y,h.z),a.copy(h)}toLocalFrame(e,t){const n=Fl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToLocal(p,p)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Fl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],h=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,h,d);for(let u=0;u!==8;u++){const p=n[u];e.pointToWorld(p,p)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,r=1/t.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,u=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(o,a),Math.min(l,h)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,a),Math.max(l,h)),Math.max(d,u));return!(g<0||p>g)}}const Nl=new M,Fl=[new M,new M,new M,new M,new M,new M,new M,new M];class zl{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Hc{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Qe{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=h0,i=u0;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Qe);const n=this.x,i=this.y,s=this.z,r=this.w,o=e.x,a=e.y,l=e.z,h=e.w;return t.x=n*h+r*o+i*l-s*a,t.y=i*h+r*a+s*o-n*l,t.z=s*h+r*l+n*a-i*o,t.w=r*h-n*o-i*a-s*l,t}inverse(e){e===void 0&&(e=new Qe);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const r=1/(t*t+n*n+i*i+s*s);return e.x*=r,e.y*=r,e.z*=r,e.w*=r,e}conjugate(e){return e===void 0&&(e=new Qe),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,r=this.x,o=this.y,a=this.z,l=this.w,h=l*n+o*s-a*i,d=l*i+a*n-r*s,u=l*s+r*i-o*n,p=-r*n-o*i-a*s;return t.x=h*l+p*-r+d*-a-u*-o,t.y=d*l+p*-o+u*-r-h*-a,t.z=u*l+p*-a+h*-o-d*-r,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,l=this.w;switch(t){case"YZX":const h=r*o+a*l;if(h>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){const d=r*r,u=o*o,p=a*a;n=Math.atan2(2*o*l-2*r*a,1-2*u-2*p),i=Math.asin(2*h),s=Math.atan2(2*r*l-2*o*a,1-2*d-2*p)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),r=Math.cos(t/2),o=Math.cos(n/2),a=Math.sin(e/2),l=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="YXZ"?(this.x=a*r*o+s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="ZXY"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o-a*l*h):i==="ZYX"?(this.x=a*r*o-s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o+a*l*h):i==="YZX"?(this.x=a*r*o+s*l*h,this.y=s*l*o+a*r*h,this.z=s*r*h-a*l*o,this.w=s*r*o-a*l*h):i==="XZY"&&(this.x=a*r*o-s*l*h,this.y=s*l*o-a*r*h,this.z=s*r*h+a*l*o,this.w=s*r*o+a*l*h),this}clone(){return new Qe(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Qe);const i=this.x,s=this.y,r=this.z,o=this.w;let a=e.x,l=e.y,h=e.z,d=e.w,u,p,g,m,f;return p=i*a+s*l+r*h+o*d,p<0&&(p=-p,a=-a,l=-l,h=-h,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),m=Math.sin((1-t)*u)/g,f=Math.sin(t*u)/g):(m=1-t,f=t),n.x=m*i+f*a,n.y=m*s+f*l,n.z=m*r+f*h,n.w=m*o+f*d,n}integrate(e,t,n,i){i===void 0&&(i=new Qe);const s=e.x*n.x,r=e.y*n.y,o=e.z*n.z,a=this.x,l=this.y,h=this.z,d=this.w,u=t*.5;return i.x+=u*(s*d+r*h-o*l),i.y+=u*(r*d+o*a-s*h),i.z+=u*(o*d+s*l-r*a),i.w+=u*(-s*a-r*l-o*h),i}}const h0=new M,u0=new M,d0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=d0;class ze{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Qe,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ze.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ze.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(Ol),Ol.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const Ol=new Qe;class Fi extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const r=e[s],o=r.length;for(let a=0;a!==o;a++){const l=(a+1)%o;t[r[a]].vsub(t[r[l]],i),i.normalize();let h=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Fi.computeNormal(i,s,r,t)}static computeNormal(e,t,n,i){const s=new M,r=new M;t.vsub(e,r),n.vsub(t,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,r,o,a,l){const h=new M;let d=-1,u=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const m=h.dot(r);m>u&&(u=m,d=g)}const p=[];for(let g=0;g<n.faces[d].length;g++){const m=n.vertices[n.faces[d][g]],f=new M;f.copy(m),s.vmult(f,f),i.vadd(f,f),p.push(f)}d>=0&&this.clipFaceAgainstHull(r,e,t,p,o,a,l)}findSeparatingAxis(e,t,n,i,s,r,o,a){const l=new M,h=new M,d=new M,u=new M,p=new M,g=new M;let m=Number.MAX_VALUE;const f=this;if(f.uniqueAxes)for(let _=0;_!==f.uniqueAxes.length;_++){n.vmult(f.uniqueAxes[_],l);const x=f.testSepAxis(l,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(l))}else{const _=o?o.length:f.faces.length;for(let x=0;x<_;x++){const w=o?o[x]:x;l.copy(f.faceNormals[w]),n.vmult(l,l);const b=f.testSepAxis(l,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(l))}}if(e.uniqueAxes)for(let _=0;_!==e.uniqueAxes.length;_++){s.vmult(e.uniqueAxes[_],h);const x=f.testSepAxis(h,e,t,n,i,s);if(x===!1)return!1;x<m&&(m=x,r.copy(h))}else{const _=a?a.length:e.faces.length;for(let x=0;x<_;x++){const w=a?a[x]:x;h.copy(e.faceNormals[w]),s.vmult(h,h);const b=f.testSepAxis(h,e,t,n,i,s);if(b===!1)return!1;b<m&&(m=b,r.copy(h))}}for(let _=0;_!==f.uniqueEdges.length;_++){n.vmult(f.uniqueEdges[_],u);for(let x=0;x!==e.uniqueEdges.length;x++)if(s.vmult(e.uniqueEdges[x],p),u.cross(p,g),!g.almostZero()){g.normalize();const w=f.testSepAxis(g,e,t,n,i,s);if(w===!1)return!1;w<m&&(m=w,r.copy(g))}}return i.vsub(t,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(e,t,n,i,s,r){const o=this;Fi.project(o,e,n,i,oo),Fi.project(t,e,s,r,ao);const a=oo[0],l=oo[1],h=ao[0],d=ao[1];if(a<d||h<l)return!1;const u=a-d,p=h-l;return u<p?u:p}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;t.x=1/12*e*(2*r*2*r+2*o*2*o),t.y=1/12*e*(2*s*2*s+2*o*2*o),t.z=1/12*e*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,r,o){const a=new M,l=new M,h=new M,d=new M,u=new M,p=new M,g=new M,m=new M,f=this,_=[],x=i,w=_;let b=-1,v=Number.MAX_VALUE;for(let O=0;O<f.faces.length;O++){a.copy(f.faceNormals[O]),n.vmult(a,a);const B=a.dot(e);B<v&&(v=B,b=O)}if(b<0)return;const S=f.faces[b];S.connectedFaces=[];for(let O=0;O<f.faces.length;O++)for(let B=0;B<f.faces[O].length;B++)S.indexOf(f.faces[O][B])!==-1&&O!==b&&S.connectedFaces.indexOf(O)===-1&&S.connectedFaces.push(O);const R=S.length;for(let O=0;O<R;O++){const B=f.vertices[S[O]],K=f.vertices[S[(O+1)%R]];B.vsub(K,l),h.copy(l),n.vmult(h,h),t.vadd(h,h),d.copy(this.faceNormals[b]),n.vmult(d,d),t.vadd(d,d),h.cross(d,u),u.negate(u),p.copy(B),n.vmult(p,p),t.vadd(p,p);const D=S.connectedFaces[O];g.copy(this.faceNormals[D]);const P=this.getPlaneConstantOfFace(D);m.copy(g),n.vmult(m,m);const F=P-m.dot(t);for(this.clipFaceAgainstPlane(x,w,m,F);x.length;)x.shift();for(;w.length;)x.push(w.shift())}g.copy(this.faceNormals[b]);const y=this.getPlaneConstantOfFace(b);m.copy(g),n.vmult(m,m);const C=y-m.dot(t);for(let O=0;O<x.length;O++){let B=m.dot(x[O])+C;if(B<=s&&(console.log(`clamped: depth=${B} to minDist=${s}`),B=s),B<=r){const K=x[O];if(B<=1e-6){const D={point:K,normal:m,depth:B};o.push(D)}}}}clipFaceAgainstPlane(e,t,n,i){let s,r;const o=e.length;if(o<2)return t;let a=e[e.length-1],l=e[0];s=n.dot(a)+i;for(let h=0;h<o;h++){if(l=e[h],r=n.dot(l)+i,s<0)if(r<0){const d=new M;d.copy(l),t.push(d)}else{const d=new M;a.lerp(l,s/(s-r),d),t.push(d)}else if(r<0){const d=new M;a.lerp(l,s/(s-r),d),t.push(d),t.push(l)}a=l,s=r}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let r,o,a,l,h,d,u=new M;for(let p=0;p<s.length;p++){u.copy(s[p]),t.vmult(u,u),e.vadd(u,u);const g=u;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(h===void 0||g.y>h)&&(h=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(l,h,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const r=i[s];t.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];t.vmult(r,r)}}if(e)for(let s=0;s<n;s++){const r=i[s];r.vadd(e,r)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],h=new M;e.vsub(l,h);const d=a.dot(h),u=new M;r.vsub(l,u);const p=a.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,t,n,i,s){const r=e.vertices.length,o=f0;let a=0,l=0;const h=p0,d=e.vertices;h.setZero(),ze.vectorToLocalFrame(n,i,t,o),ze.pointToLocalFrame(n,i,h,h);const u=h.dot(o);l=a=d[0].dot(o);for(let p=1;p<r;p++){const g=d[p].dot(o);g>a&&(a=g),g<l&&(l=g)}if(l-=u,a-=u,l>a){const p=l;l=a,a=p}s[0]=a,s[1]=l}}const oo=[],ao=[];new M;const f0=new M,p0=new M;class vr extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Fi({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),vr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Cn.set(s[r][0],s[r][1],s[r][2]),t.vmult(Cn,Cn),e.vadd(Cn,Cn),n(Cn.x,Cn.y,Cn.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Zt[0].set(s.x,s.y,s.z),Zt[1].set(-s.x,s.y,s.z),Zt[2].set(-s.x,-s.y,s.z),Zt[3].set(-s.x,-s.y,-s.z),Zt[4].set(s.x,-s.y,-s.z),Zt[5].set(s.x,s.y,-s.z),Zt[6].set(-s.x,s.y,-s.z),Zt[7].set(s.x,-s.y,s.z);const r=Zt[0];t.vmult(r,r),e.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=Zt[o];t.vmult(a,a),e.vadd(a,a);const l=a.x,h=a.y,d=a.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),d>i.z&&(i.z=d),l<n.x&&(n.x=l),h<n.y&&(n.y=h),d<n.z&&(n.z=d)}}}const Cn=new M,Zt=[new M,new M,new M,new M,new M,new M,new M,new M],Yo={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ko={AWAKE:0,SLEEPY:1,SLEEPING:2};class de extends Hc{constructor(e){e===void 0&&(e={}),super(),this.id=de.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?de.STATIC:de.DYNAMIC,typeof e.type==typeof de.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=de.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Qe,this.initQuaternion=new Qe,this.previousQuaternion=new Qe,this.interpolatedQuaternion=new Qe,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new Ht,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new Ht,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Ct,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=Boolean(e.isTrigger),e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=de.AWAKE,this.wakeUpAfterNarrowphase=!1,e===de.SLEEPING&&this.dispatchEvent(de.wakeupEvent)}sleep(){this.sleepState=de.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===de.AWAKE&&n<i?(this.sleepState=de.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(de.sleepyEvent)):t===de.SLEEPY&&n>i?this.wakeUp():t===de.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(de.sleepEvent))}}updateSolveMassProperties(){this.sleepState===de.SLEEPING||this.type===de.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new Qe;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const r=e[s];r.updateBoundingSphereRadius();const o=t[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=m0,r=g0,o=this.quaternion,a=this.aabb,l=_0;for(let h=0;h!==i;h++){const d=e[h];o.vmult(t[h],s),s.vadd(this.position,s),o.mult(n[h],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),h===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=x0,i=v0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==de.DYNAMIC)return;this.sleepState===de.SLEEPING&&this.wakeUp();const n=M0;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==de.DYNAMIC)return;const n=b0,i=w0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===de.DYNAMIC&&(this.sleepState===de.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==de.DYNAMIC)return;this.sleepState===de.SLEEPING&&this.wakeUp();const n=t,i=S0;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=E0;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==de.DYNAMIC)return;const n=T0,i=A0;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=C0;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),vr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===de.DYNAMIC||this.type===de.KINEMATIC)||this.sleepState===de.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,l=this.quaternion,h=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=h*e;i.x+=o.x*p*u.x,i.y+=o.y*p*u.y,i.z+=o.z*p*u.z;const g=d.elements,m=this.angularFactor,f=a.x*m.x,_=a.y*m.y,x=a.z*m.z;s.x+=e*(g[0]*f+g[1]*_+g[2]*x),s.y+=e*(g[3]*f+g[4]*_+g[5]*x),s.z+=e*(g[6]*f+g[7]*_+g[8]*x),r.x+=i.x*e,r.y+=i.y*e,r.z+=i.z*e,l.integrate(this.angularVelocity,e,this.angularFactor,l),t&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}de.idCounter=0;de.COLLIDE_EVENT_NAME="collide";de.DYNAMIC=Yo.DYNAMIC;de.STATIC=Yo.STATIC;de.KINEMATIC=Yo.KINEMATIC;de.AWAKE=Ko.AWAKE;de.SLEEPY=Ko.SLEEPY;de.SLEEPING=Ko.SLEEPING;de.wakeupEvent={type:"wakeup"};de.sleepyEvent={type:"sleepy"};de.sleepEvent={type:"sleep"};const m0=new M,g0=new Qe,_0=new Ct,x0=new Ht,v0=new Ht,y0=new Ht,M0=new M,b0=new M,w0=new M,S0=new M,E0=new M,T0=new M,A0=new M,C0=new M;class Wc{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&de.STATIC)!==0||e.sleepState===de.SLEEPING)&&((t.type&de.STATIC)!==0||t.sleepState===de.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=L0;t.position.vsub(e.position,s);const r=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<r&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=R0,i=P0,s=I0,r=e.length;for(let o=0;o!==r;o++)i[o]=e[o],s[o]=t[o];e.length=0,t.length=0;for(let o=0;o!==r;o++){const a=i[o].id,l=s[o].id,h=a<l?`${a},${l}`:`${l},${a}`;n[h]=o,n.keys.push(h)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),l=n[a];e.push(i[l]),t.push(s[l]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const L0=new M;new M;new Qe;new M;const R0={keys:[]},P0=[],I0=[];new M;new M;new M;class D0 extends Wc{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)r=i[a],o=i[l],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class hr{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,r,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let qc,jc,Xc,Yc,Kc,Zc,$c;const Zo={CLOSEST:1,ANY:2,ALL:4};qc=fe.types.SPHERE;jc=fe.types.PLANE;Xc=fe.types.BOX;Yc=fe.types.CYLINDER;Kc=fe.types.CONVEXPOLYHEDRON;Zc=fe.types.HEIGHTFIELD;$c=fe.types.TRIMESH;class Je{get[qc](){return this._intersectSphere}get[jc](){return this._intersectPlane}get[Xc](){return this._intersectBox}get[Yc](){return this._intersectConvex}get[Kc](){return this._intersectConvex}get[Zc](){return this._intersectHeightfield}get[$c](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Je.ANY,this.result=new hr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Je.ANY,this.result=t.result||new hr,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Bl),lo.length=0,e.broadphase.aabbQuery(e,Bl,lo),this.intersectBodies(lo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=N0,s=F0;for(let r=0,o=e.shapes.length;r<o;r++){const a=e.shapes[r];if(!(n&&!a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[r],s),e.quaternion.vmult(e.shapeOffsets[r],i),i.vadd(e.position,i),this.intersectShape(a,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(K0(s,this.direction,n)>e.boundingSphereRadius)return;const o=this[e.type];o&&o.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const r=this.from,o=this.to,a=this.direction,l=new M(0,0,1);t.vmult(l,l);const h=new M;r.vsub(n,h);const d=h.dot(l);o.vsub(n,h);const u=h.dot(l);if(d*u>0||r.distanceTo(o)<d)return;const p=l.dot(a);if(Math.abs(p)<this.precision)return;const g=new M,m=new M,f=new M;r.vsub(n,g);const _=-l.dot(g)/p;a.scale(_,m),r.vadd(m,f),this.reportIntersection(l,f,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const r=z0;r.from.copy(this.from),r.to.copy(this.to),ze.pointToLocalFrame(n,t,r.from,r.from),ze.pointToLocalFrame(n,t,r.to,r.to),r.updateDirection();const o=O0;let a,l,h,d;a=l=0,h=d=e.data.length-1;const u=new Ct;r.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),h=Math.min(h,o[0]+1),d=Math.min(d,o[1]+1);for(let p=a;p<h;p++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(r)){if(e.getConvexTrianglePillar(p,g,!1),ze.pointToWorldFrame(n,t,e.pillarOffset,tr),this._intersectConvex(e.pillarConvex,t,tr,i,s,Ul),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),ze.pointToWorldFrame(n,t,e.pillarOffset,tr),this._intersectConvex(e.pillarConvex,t,tr,i,s,Ul)}}}_intersectSphere(e,t,n,i,s){const r=this.from,o=this.to,a=e.radius,l=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,h=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,u=h**2-4*l*d,p=B0,g=U0;if(!(u<0))if(u===0)r.lerp(o,u,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1);else{const m=(-h-Math.sqrt(u))/(2*l),f=(-h+Math.sqrt(u))/(2*l);if(m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,p),p.vsub(n,g),g.normalize(),this.reportIntersection(g,p,s,i,-1))}}_intersectConvex(e,t,n,i,s,r){const o=k0,a=kl,l=r&&r.faceList||null,h=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,m=this.to,f=g.distanceTo(m),_=l?l.length:h.length,x=this.result;for(let w=0;!x.shouldStop&&w<_;w++){const b=l?l[w]:w,v=h[b],S=u[b],R=t,y=n;a.copy(d[v[0]]),R.vmult(a,a),a.vadd(y,a),a.vsub(g,a),R.vmult(S,o);const C=p.dot(o);if(Math.abs(C)<this.precision)continue;const O=o.dot(a)/C;if(!(O<0)){p.scale(O,xt),xt.vadd(g,xt),Gt.copy(d[v[0]]),R.vmult(Gt,Gt),y.vadd(Gt,Gt);for(let B=1;!x.shouldStop&&B<v.length-1;B++){$t.copy(d[v[B]]),Jt.copy(d[v[B+1]]),R.vmult($t,$t),R.vmult(Jt,Jt),y.vadd($t,$t),y.vadd(Jt,Jt);const K=xt.distanceTo(g);!(Je.pointInTriangle(xt,Gt,$t,Jt)||Je.pointInTriangle(xt,$t,Gt,Jt))||K>f||this.reportIntersection(o,xt,s,i,b)}}}}_intersectTrimesh(e,t,n,i,s,r){const o=G0,a=X0,l=Y0,h=kl,d=V0,u=H0,p=W0,g=j0,m=q0,f=e.indices;e.vertices;const _=this.from,x=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(t),ze.vectorToLocalFrame(n,t,w,d),ze.pointToLocalFrame(n,t,_,u),ze.pointToLocalFrame(n,t,x,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();const b=u.distanceSquared(p);e.tree.rayQuery(this,l,a);for(let v=0,S=a.length;!this.result.shouldStop&&v!==S;v++){const R=a[v];e.getNormal(R,o),e.getVertex(f[R*3],Gt),Gt.vsub(u,h);const y=d.dot(o),C=o.dot(h)/y;if(C<0)continue;d.scale(C,xt),xt.vadd(u,xt),e.getVertex(f[R*3+1],$t),e.getVertex(f[R*3+2],Jt);const O=xt.distanceSquared(u);!(Je.pointInTriangle(xt,$t,Gt,Jt)||Je.pointInTriangle(xt,Gt,$t,Jt))||O>b||(ze.vectorToWorldFrame(t,o,m),ze.pointToWorldFrame(n,t,xt,g),this.reportIntersection(m,g,s,i,R))}a.length=0}reportIntersection(e,t,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(t),l=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Je.ALL:this.hasHit=!0,l.set(r,o,e,t,n,i,a),l.hasHit=!0,this.callback(l);break;case Je.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a));break;case Je.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,o,e,t,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,qn),n.vsub(t,ss),e.vsub(t,co);const s=qn.dot(qn),r=qn.dot(ss),o=qn.dot(co),a=ss.dot(ss),l=ss.dot(co);let h,d;return(h=a*o-r*l)>=0&&(d=s*l-r*o)>=0&&h+d<s*a-r*r}}Je.CLOSEST=Zo.CLOSEST;Je.ANY=Zo.ANY;Je.ALL=Zo.ALL;const Bl=new Ct,lo=[],ss=new M,co=new M,N0=new M,F0=new Qe,xt=new M,Gt=new M,$t=new M,Jt=new M;new M;new hr;const Ul={faceList:[0]},tr=new M,z0=new Je,O0=[],B0=new M,U0=new M,k0=new M;new M;new M;const kl=new M,G0=new M,V0=new M,H0=new M,W0=new M,q0=new M,j0=new M;new Ct;const X0=[],Y0=new ze,qn=new M,nr=new M;function K0(c,e,t){t.vsub(c,qn);const n=qn.dot(e);return e.scale(n,nr),nr.vadd(c,nr),t.distanceTo(nr)}class Ii extends Wc{static checkBounds(e,t,n){let i,s;n===0?(i=e.position.x,s=t.position.x):n===1?(i=e.position.y,s=t.position.y):n===2&&(i=e.position.z,s=t.position.z);const r=e.boundingRadius,o=t.boundingRadius,a=i+r;return s-o<a}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)e[s+1]=e[s];e[s+1]=i}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){const i=e[t];let s;for(s=t-1;s>=0&&!(e[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)e[s+1]=e[s];e[s+1]=i}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;const t=this.axisList;this._addBodyHandler=n=>{t.push(n.body)},this._removeBodyHandler=n=>{const i=t.indexOf(n.body);i!==-1&&t.splice(i,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener("addBody",this._addBodyHandler),e.removeEventListener("removeBody",this._removeBodyHandler),e.addEventListener("addBody",this._addBodyHandler),e.addEventListener("removeBody",this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(e,t,n){const i=this.axisList,s=i.length,r=this.axisIndex;let o,a;for(this.dirty&&(this.sortList(),this.dirty=!1),o=0;o!==s;o++){const l=i[o];for(a=o+1;a<s;a++){const h=i[a];if(!!this.needBroadphaseCollision(l,h)){if(!Ii.checkBounds(l,h,r))break;this.intersectionTest(l,h,t,n)}}}}sortList(){const e=this.axisList,t=this.axisIndex,n=e.length;for(let i=0;i!==n;i++){const s=e[i];s.aabbNeedsUpdate&&s.updateAABB()}t===0?Ii.insertionSortX(e):t===1?Ii.insertionSortY(e):t===2&&Ii.insertionSortZ(e)}autoDetectAxis(){let e=0,t=0,n=0,i=0,s=0,r=0;const o=this.axisList,a=o.length,l=1/a;for(let p=0;p!==a;p++){const g=o[p],m=g.position.x;e+=m,t+=m*m;const f=g.position.y;n+=f,i+=f*f;const _=g.position.z;s+=_,r+=_*_}const h=t-e*e*l,d=i-n*n*l,u=r-s*s*l;h>d?h>u?this.axisIndex=0:this.axisIndex=2:d>u?this.axisIndex=1:this.axisIndex=2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const r=this.axisList;t.lowerBound[s],t.upperBound[s];for(let o=0;o<r.length;o++){const a=r[o];a.aabbNeedsUpdate&&a.updateAABB(),a.aabb.overlaps(t)&&n.push(a)}return n}}class Z0{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Gl{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Ts{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ts.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Gl,this.jacobianElementB=new Gl,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*e-i*t-r*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return e.spatial.dot(s)+t.spatial.dot(r)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return e.multiplyVectors(s,o)+t.multiplyVectors(r,a)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,l=n.invMassSolve,h=i.invMassSolve;return s.scale(l,Vl),o.scale(h,Hl),n.invInertiaWorldSolve.vmult(r,Wl),i.invInertiaWorldSolve.vmult(a,ql),e.multiplyVectors(Vl,Wl)+t.multiplyVectors(Hl,ql)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let l=s+r;return o.vmult(e.rotational,ir),l+=ir.dot(e.rotational),a.vmult(t.rotational,ir),l+=ir.dot(t.rotational),l}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=$0;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,r),i.wlambda.addScaledVector(e,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(e,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ts.idCounter=0;const Vl=new M,Hl=new M,Wl=new M,ql=new M,ir=new M,$0=new M;class J0 extends Ts{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=Q0,l=e_,h=i.velocity,d=i.angularVelocity;i.force,i.torque;const u=s.velocity,p=s.angularVelocity;s.force,s.torque;const g=t_,m=this.jacobianElementA,f=this.jacobianElementB,_=this.ni;r.cross(_,a),o.cross(_,l),_.negate(m.spatial),a.negate(m.rotational),f.spatial.copy(_),f.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const x=_.dot(g),w=this.restitution+1,b=w*u.dot(_)-w*h.dot(_)+p.dot(l)-d.dot(a),v=this.computeGiMf();return-x*t-b*n-e*v}getImpactVelocityAlongNormal(){const e=n_,t=i_,n=s_,i=r_,s=o_;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Q0=new M,e_=new M,t_=new M,n_=new M,i_=new M,s_=new M,r_=new M,o_=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class jl extends Ts{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=a_,r=l_,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(r);const h=this.computeGW(),d=this.computeGiMf();return-h*t-e*d}}const a_=new M,l_=new M;class ai{constructor(e,t,n){n=Z0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ai.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ai.idCounter=0;class li{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=li.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}li.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Je;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class c_ extends fe{constructor(e){if(super({type:fe.types.SPHERE}),this.radius=e!==void 0?e:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new M);const n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const a=r[o];n[a]=e[a]-s,i[a]=e[a]+s}}}new M;new M;new M;new M;new M;new M;new M;new M;new M;class h_ extends Fi{constructor(e,t,n,i){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),i===void 0&&(i=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(t<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,r=[],o=[],a=[],l=[],h=[],d=Math.cos,u=Math.sin;r.push(new M(-t*u(0),-n*.5,t*d(0))),l.push(0),r.push(new M(-e*u(0),n*.5,e*d(0))),h.push(1);for(let g=0;g<s;g++){const m=2*Math.PI/s*(g+1),f=2*Math.PI/s*(g+.5);g<s-1?(r.push(new M(-t*u(m),-n*.5,t*d(m))),l.push(2*g+2),r.push(new M(-e*u(m),n*.5,e*d(m))),h.push(2*g+3),a.push([2*g,2*g+1,2*g+3,2*g+2])):a.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&o.push(new M(-u(f),0,d(f)))}a.push(l),o.push(new M(0,1,0));const p=[];for(let g=0;g<h.length;g++)p.push(h[h.length-g-1]);a.push(p),super({vertices:r,faces:a,axes:o}),this.type=fe.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=i}}new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ct;new M;new Ct;new M;new M;new M;new M;new M;new M;new M;new Ct;new M;new ze;new Ct;class u_{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class d_ extends u_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=t.bodies,l=a.length,h=e;let d,u,p,g,m,f;if(o!==0)for(let b=0;b!==l;b++)a[b].updateSolveMassProperties();const _=p_,x=m_,w=f_;_.length=o,x.length=o,w.length=o;for(let b=0;b!==o;b++){const v=r[b];w[b]=0,x[b]=v.computeB(h),_[b]=1/v.computeC()}if(o!==0){for(let S=0;S!==l;S++){const R=a[S],y=R.vlambda,C=R.wlambda;y.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let S=0;S!==o;S++){const R=r[S];d=x[S],u=_[S],f=w[S],m=R.computeGWlambda(),p=u*(d-m-R.eps*f),f+p<R.minForce?p=R.minForce-f:f+p>R.maxForce&&(p=R.maxForce-f),w[S]+=p,g+=p>0?p:-p,R.addToWlambda(p)}if(g*g<s)break}for(let S=0;S!==l;S++){const R=a[S],y=R.velocity,C=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),y.vadd(R.vlambda,y),R.wlambda.vmul(R.angularFactor,R.wlambda),C.vadd(R.wlambda,C)}let b=r.length;const v=1/h;for(;b--;)r[b].multiplier=w[b]*v}return n}}const f_=[],p_=[],m_=[];de.STATIC;class g_{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class __ extends g_{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const We={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class x_{get[We.sphereSphere](){return this.sphereSphere}get[We.spherePlane](){return this.spherePlane}get[We.boxBox](){return this.boxBox}get[We.sphereBox](){return this.sphereBox}get[We.planeBox](){return this.planeBox}get[We.convexConvex](){return this.convexConvex}get[We.sphereConvex](){return this.sphereConvex}get[We.planeConvex](){return this.planeConvex}get[We.boxConvex](){return this.boxConvex}get[We.sphereHeightfield](){return this.sphereHeightfield}get[We.boxHeightfield](){return this.boxHeightfield}get[We.convexHeightfield](){return this.convexHeightfield}get[We.sphereParticle](){return this.sphereParticle}get[We.planeParticle](){return this.planeParticle}get[We.boxParticle](){return this.boxParticle}get[We.convexParticle](){return this.convexParticle}get[We.cylinderCylinder](){return this.convexConvex}get[We.sphereCylinder](){return this.sphereConvex}get[We.planeCylinder](){return this.planeConvex}get[We.boxCylinder](){return this.boxConvex}get[We.convexCylinder](){return this.convexConvex}get[We.heightfieldCylinder](){return this.heightfieldCylinder}get[We.particleCylinder](){return this.particleCylinder}get[We.sphereTrimesh](){return this.sphereTrimesh}get[We.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new __,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new J0(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const l=n.material||e.material,h=i.material||t.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(o.restitution=l.restitution*h.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,r=e.sj,o=this.world,a=this.currentContactMaterial;let l=a.friction;const h=s.material||n.material,d=r.material||i.material;if(h&&d&&h.friction>=0&&d.friction>=0&&(l=h.friction*d.friction),l>0){const u=l*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const g=this.frictionEquationPool,m=g.length?g.pop():new jl(n,i,u*p),f=g.length?g.pop():new jl(n,i,u*p);return m.bi=f.bi=n,m.bj=f.bj=i,m.minForce=f.minForce=-u*p,m.maxForce=f.maxForce=u*p,m.ri.copy(e.ri),m.rj.copy(e.rj),f.ri.copy(e.ri),f.rj.copy(e.rj),e.ni.tangents(m.t,f.t),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.enabled=f.enabled=e.enabled,t.push(m,f),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];kn.setZero(),Ci.setZero(),Li.setZero();const s=t.bi;t.bj;for(let o=0;o!==e;o++)t=this.result[this.result.length-1-o],t.bi!==s?(kn.vadd(t.ni,kn),Ci.vadd(t.ri,Ci),Li.vadd(t.rj,Li)):(kn.vsub(t.ni,kn),Ci.vadd(t.rj,Ci),Li.vadd(t.ri,Li));const r=1/e;Ci.scale(r,n.ri),Li.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),kn.normalize(),kn.tangents(n.t,i.t)}getContacts(e,t,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=M_,l=b_,h=v_,d=y_;for(let u=0,p=e.length;u!==p;u++){const g=e[u],m=t[u];let f=null;g.material&&m.material&&(f=n.getContactMaterial(g.material,m.material)||null);const _=g.type&de.KINEMATIC&&m.type&de.STATIC||g.type&de.STATIC&&m.type&de.KINEMATIC||g.type&de.KINEMATIC&&m.type&de.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],h),h.vadd(g.position,h);const w=g.shapes[x];for(let b=0;b<m.shapes.length;b++){m.quaternion.mult(m.shapeOrientations[b],l),m.quaternion.vmult(m.shapeOffsets[b],d),d.vadd(m.position,d);const v=m.shapes[b];if(!(w.collisionFilterMask&v.collisionFilterGroup&&v.collisionFilterMask&w.collisionFilterGroup)||h.distanceTo(d)>w.boundingSphereRadius+v.boundingSphereRadius)continue;let S=null;w.material&&v.material&&(S=n.getContactMaterial(w.material,v.material)||null),this.currentContactMaterial=S||f||n.defaultContactMaterial;const R=w.type|v.type,y=this[R];if(y){let C=!1;w.type<v.type?C=y.call(this,w,v,h,d,a,l,g,m,w,v,_):C=y.call(this,v,w,d,h,l,a,m,g,w,v,_),C&&_&&(n.shapeOverlapKeeper.set(w.id,v.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(e,t,n,i,s,r,o,a,l,h,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const u=this.createContactEquation(o,a,e,t,l,h);i.vsub(n,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-t.radius,u.rj),u.ri.vadd(n,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(i,u.rj),u.rj.vsub(a.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,t,n,i,s,r,o,a,l,h,d){const u=this.createContactEquation(o,a,e,t,l,h);if(u.ni.set(0,0,1),r.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),n.vsub(i,sr),u.ni.scale(u.ni.dot(sr),Xl),sr.vsub(Xl,u.rj),-sr.dot(u.ni)<=e.radius){if(d)return!0;const p=u.ri,g=u.rj;p.vadd(n,p),p.vsub(o.position,p),g.vadd(i,g),g.vsub(a.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}sphereBox(e,t,n,i,s,r,o,a,l,h,d){const u=this.v3pool,p=Y_;n.vsub(i,rr),t.getSideNormals(p,r);const g=e.radius;let m=!1;const f=Z_,_=$_,x=J_;let w=null,b=0,v=0,S=0,R=null;for(let I=0,q=p.length;I!==q&&m===!1;I++){const k=q_;k.copy(p[I]);const U=k.length();k.normalize();const W=rr.dot(k);if(W<U+g&&W>0){const J=j_,H=X_;J.copy(p[(I+1)%3]),H.copy(p[(I+2)%3]);const ee=J.length(),ue=H.length();J.normalize(),H.normalize();const ge=rr.dot(J),Z=rr.dot(H);if(ge<ee&&ge>-ee&&Z<ue&&Z>-ue){const Pe=Math.abs(W-U-g);if((R===null||Pe<R)&&(R=Pe,v=ge,S=Z,w=U,f.copy(k),_.copy(J),x.copy(H),b++,d))return!0}}}if(b){m=!0;const I=this.createContactEquation(o,a,e,t,l,h);f.scale(-g,I.ri),I.ni.copy(f),I.ni.negate(I.ni),f.scale(w,f),_.scale(v,_),f.vadd(_,f),x.scale(S,x),f.vadd(x,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let y=u.get();const C=K_;for(let I=0;I!==2&&!m;I++)for(let q=0;q!==2&&!m;q++)for(let k=0;k!==2&&!m;k++)if(y.set(0,0,0),I?y.vadd(p[0],y):y.vsub(p[0],y),q?y.vadd(p[1],y):y.vsub(p[1],y),k?y.vadd(p[2],y):y.vsub(p[2],y),i.vadd(y,C),C.vsub(n,C),C.lengthSquared()<g*g){if(d)return!0;m=!0;const U=this.createContactEquation(o,a,e,t,l,h);U.ri.copy(C),U.ri.normalize(),U.ni.copy(U.ri),U.ri.scale(g,U.ri),U.rj.copy(y),U.ri.vadd(n,U.ri),U.ri.vsub(o.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(a.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}u.release(y),y=null;const O=u.get(),B=u.get(),K=u.get(),D=u.get(),P=u.get(),F=p.length;for(let I=0;I!==F&&!m;I++)for(let q=0;q!==F&&!m;q++)if(I%3!==q%3){p[q].cross(p[I],O),O.normalize(),p[I].vadd(p[q],B),K.copy(n),K.vsub(B,K),K.vsub(i,K);const k=K.dot(O);O.scale(k,D);let U=0;for(;U===I%3||U===q%3;)U++;P.copy(n),P.vsub(D,P),P.vsub(B,P),P.vsub(i,P);const W=Math.abs(k),J=P.length();if(W<p[U].length()&&J<g){if(d)return!0;m=!0;const H=this.createContactEquation(o,a,e,t,l,h);B.vadd(D,H.rj),H.rj.copy(H.rj),P.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(o.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(a.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}u.release(O,B,K,D,P)}planeBox(e,t,n,i,s,r,o,a,l,h,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,r,o,a,e,t,d)}convexConvex(e,t,n,i,s,r,o,a,l,h,d,u,p){const g=fx;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,r,g,u,p)){const m=[],f=px;e.clipAgainstHull(n,s,t,i,r,g,-100,100,m);let _=0;for(let x=0;x!==m.length;x++){if(d)return!0;const w=this.createContactEquation(o,a,e,t,l,h),b=w.ri,v=w.rj;g.negate(w.ni),m[x].normal.negate(f),f.scale(m[x].depth,f),m[x].point.vadd(f,b),v.copy(m[x].point),b.vsub(n,b),v.vsub(i,v),b.vadd(n,b),b.vsub(o.position,b),v.vadd(i,v),v.vsub(a.position,v),this.result.push(w),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}}sphereConvex(e,t,n,i,s,r,o,a,l,h,d){const u=this.v3pool;n.vsub(i,Q_);const p=t.faceNormals,g=t.faces,m=t.vertices,f=e.radius;let _=!1;for(let x=0;x!==m.length;x++){const w=m[x],b=ix;r.vmult(w,b),i.vadd(b,b);const v=nx;if(b.vsub(n,v),v.lengthSquared()<f*f){if(d)return!0;_=!0;const S=this.createContactEquation(o,a,e,t,l,h);S.ri.copy(v),S.ri.normalize(),S.ni.copy(S.ri),S.ri.scale(f,S.ri),b.vsub(i,S.rj),S.ri.vadd(n,S.ri),S.ri.vsub(o.position,S.ri),S.rj.vadd(i,S.rj),S.rj.vsub(a.position,S.rj),this.result.push(S),this.createFrictionEquationsFromContact(S,this.frictionResult);return}}for(let x=0,w=g.length;x!==w&&_===!1;x++){const b=p[x],v=g[x],S=sx;r.vmult(b,S);const R=rx;r.vmult(m[v[0]],R),R.vadd(i,R);const y=ox;S.scale(-f,y),n.vadd(y,y);const C=ax;y.vsub(R,C);const O=C.dot(S),B=lx;if(n.vsub(R,B),O<0&&B.dot(S)>0){const K=[];for(let D=0,P=v.length;D!==P;D++){const F=u.get();r.vmult(m[v[D]],F),i.vadd(F,F),K.push(F)}if(W_(K,S,n)){if(d)return!0;_=!0;const D=this.createContactEquation(o,a,e,t,l,h);S.scale(-f,D.ri),S.negate(D.ni);const P=u.get();S.scale(-O,P);const F=u.get();S.scale(-f,F),n.vsub(i,D.rj),D.rj.vadd(F,D.rj),D.rj.vadd(P,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(a.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),u.release(P),u.release(F),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let I=0,q=K.length;I!==q;I++)u.release(K[I]);return}else for(let D=0;D!==v.length;D++){const P=u.get(),F=u.get();r.vmult(m[v[(D+1)%v.length]],P),r.vmult(m[v[(D+2)%v.length]],F),i.vadd(P,P),i.vadd(F,F);const I=ex;F.vsub(P,I);const q=tx;I.unit(q);const k=u.get(),U=u.get();n.vsub(P,U);const W=U.dot(q);q.scale(W,k),k.vadd(P,k);const J=u.get();if(k.vsub(n,J),W>0&&W*W<I.lengthSquared()&&J.lengthSquared()<f*f){if(d)return!0;const H=this.createContactEquation(o,a,e,t,l,h);k.vsub(i,H.rj),k.vsub(n,H.ni),H.ni.normalize(),H.ni.scale(f,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(a.position,H.rj),H.ri.vadd(n,H.ri),H.ri.vsub(o.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let ee=0,ue=K.length;ee!==ue;ee++)u.release(K[ee]);u.release(P),u.release(F),u.release(k),u.release(J),u.release(U);return}u.release(P),u.release(F),u.release(k),u.release(J),u.release(U)}for(let D=0,P=K.length;D!==P;D++)u.release(K[D])}}}planeConvex(e,t,n,i,s,r,o,a,l,h,d){const u=cx,p=hx;p.set(0,0,1),s.vmult(p,p);let g=0;const m=ux;for(let f=0;f!==t.vertices.length;f++)if(u.copy(t.vertices[f]),r.vmult(u,u),i.vadd(u,u),u.vsub(n,m),p.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,h),w=dx;p.scale(p.dot(m),w),u.vsub(w,w),w.vsub(n,x.ri),x.ni.copy(p),u.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}sphereHeightfield(e,t,n,i,s,r,o,a,l,h,d){const u=t.data,p=e.radius,g=t.elementSize,m=Tx,f=Ex;ze.pointToLocalFrame(i,r,n,f);let _=Math.floor((f.x-p)/g)-1,x=Math.ceil((f.x+p)/g)+1,w=Math.floor((f.y-p)/g)-1,b=Math.ceil((f.y+p)/g)+1;if(x<0||b<0||_>u.length||w>u[0].length)return;_<0&&(_=0),x<0&&(x=0),w<0&&(w=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),x>=u.length&&(x=u.length-1),b>=u[0].length&&(b=u[0].length-1),w>=u[0].length&&(w=u[0].length-1);const v=[];t.getRectMinMax(_,w,x,b,v);const S=v[0],R=v[1];if(f.z-p>R||f.z+p<S)return;const y=this.result;for(let C=_;C<x;C++)for(let O=w;O<b;O++){const B=y.length;let K=!1;if(t.getConvexTrianglePillar(C,O,!1),ze.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(K=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&K||(t.getConvexTrianglePillar(C,O,!0),ze.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(K=this.sphereConvex(e,t.pillarConvex,n,m,s,r,o,a,e,t,d)),d&&K))return!0;if(y.length-B>2)return}}boxHeightfield(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexHeightfield(e,t,n,i,s,r,o,a,l,h,d){const u=t.data,p=t.elementSize,g=e.boundingSphereRadius,m=wx,f=Sx,_=bx;ze.pointToLocalFrame(i,r,n,_);let x=Math.floor((_.x-g)/p)-1,w=Math.ceil((_.x+g)/p)+1,b=Math.floor((_.y-g)/p)-1,v=Math.ceil((_.y+g)/p)+1;if(w<0||v<0||x>u.length||b>u[0].length)return;x<0&&(x=0),w<0&&(w=0),b<0&&(b=0),v<0&&(v=0),x>=u.length&&(x=u.length-1),w>=u.length&&(w=u.length-1),v>=u[0].length&&(v=u[0].length-1),b>=u[0].length&&(b=u[0].length-1);const S=[];t.getRectMinMax(x,b,w,v,S);const R=S[0],y=S[1];if(!(_.z-g>y||_.z+g<R))for(let C=x;C<w;C++)for(let O=b;O<v;O++){let B=!1;if(t.getConvexTrianglePillar(C,O,!1),ze.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&B||(t.getConvexTrianglePillar(C,O,!0),ze.pointToWorldFrame(i,r,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.convexConvex(e,t.pillarConvex,n,m,s,r,o,a,null,null,d,f,null)),d&&B))return!0}}sphereParticle(e,t,n,i,s,r,o,a,l,h,d){const u=xx;if(u.set(0,0,1),i.vsub(n,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;const g=this.createContactEquation(a,o,t,e,l,h);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,n,i,s,r,o,a,l,h,d){const u=mx;u.set(0,0,1),o.quaternion.vmult(u,u);const p=gx;if(i.vsub(o.position,p),u.dot(p)<=0){if(d)return!0;const m=this.createContactEquation(a,o,t,e,l,h);m.ni.copy(u),m.ni.negate(m.ni),m.ri.set(0,0,0);const f=_x;u.scale(u.dot(i),f),i.vsub(f,f),m.rj.copy(f),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(e,t,n,i,s,r,o,a,l,h,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,r,o,a,e,t,d)}convexParticle(e,t,n,i,s,r,o,a,l,h,d){let u=-1;const p=yx,g=Mx;let m=null;const f=vx;if(f.copy(i),f.vsub(n,f),s.conjugate(Yl),Yl.vmult(f,f),e.pointIsInside(f)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let _=0,x=e.faces.length;_!==x;_++){const w=[e.worldVertices[e.faces[_][0]]],b=e.worldFaceNormals[_];i.vsub(w[0],Kl);const v=-b.dot(Kl);if(m===null||Math.abs(v)<Math.abs(m)){if(d)return!0;m=v,u=_,p.copy(b)}}if(u!==-1){const _=this.createContactEquation(a,o,t,e,l,h);p.scale(m,g),g.vadd(i,g),g.vsub(n,g),_.rj.copy(g),p.negate(_.ni),_.ri.set(0,0,0);const x=_.ri,w=_.rj;x.vadd(i,x),x.vsub(a.position,x),w.vadd(n,w),w.vsub(o.position,w),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,r,o,a,l,h,d){return this.convexHeightfield(t,e,i,n,r,s,a,o,l,h,d)}particleCylinder(e,t,n,i,s,r,o,a,l,h,d){return this.convexParticle(t,e,i,n,r,s,a,o,l,h,d)}sphereTrimesh(e,t,n,i,s,r,o,a,l,h,d){const u=R_,p=P_,g=I_,m=D_,f=N_,_=F_,x=U_,w=L_,b=A_,v=k_;ze.pointToLocalFrame(i,r,n,f);const S=e.radius;x.lowerBound.set(f.x-S,f.y-S,f.z-S),x.upperBound.set(f.x+S,f.y+S,f.z+S),t.getTrianglesInAABB(x,v);const R=C_,y=e.radius*e.radius;for(let D=0;D<v.length;D++)for(let P=0;P<3;P++)if(t.getVertex(t.indices[v[D]*3+P],R),R.vsub(f,b),b.lengthSquared()<=y){if(w.copy(R),ze.pointToWorldFrame(i,r,w,R),R.vsub(n,b),d)return!0;let F=this.createContactEquation(o,a,e,t,l,h);F.ni.copy(b),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(o.position,F.ri),F.rj.copy(R),F.rj.vsub(a.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let D=0;D<v.length;D++)for(let P=0;P<3;P++){t.getVertex(t.indices[v[D]*3+P],u),t.getVertex(t.indices[v[D]*3+(P+1)%3],p),p.vsub(u,g),f.vsub(p,_);const F=_.dot(g);f.vsub(u,_);let I=_.dot(g);if(I>0&&F<0&&(f.vsub(u,_),m.copy(g),m.normalize(),I=_.dot(m),m.scale(I,_),_.vadd(u,_),_.distanceTo(f)<e.radius)){if(d)return!0;const k=this.createContactEquation(o,a,e,t,l,h);_.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(e.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),ze.pointToWorldFrame(i,r,_,_),_.vsub(a.position,k.rj),ze.vectorToWorldFrame(r,k.ni,k.ni),ze.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const C=z_,O=O_,B=B_,K=T_;for(let D=0,P=v.length;D!==P;D++){t.getTriangleVertices(v[D],C,O,B),t.getNormal(v[D],K),f.vsub(C,_);let F=_.dot(K);if(K.scale(F,_),f.vsub(_,_),F=_.distanceTo(f),Je.pointInTriangle(_,C,O,B)&&F<e.radius){if(d)return!0;let I=this.createContactEquation(o,a,e,t,l,h);_.vsub(f,I.ni),I.ni.normalize(),I.ni.scale(e.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),ze.pointToWorldFrame(i,r,_,_),_.vsub(a.position,I.rj),ze.vectorToWorldFrame(r,I.ni,I.ni),ze.vectorToWorldFrame(r,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}v.length=0}planeTrimesh(e,t,n,i,s,r,o,a,l,h,d){const u=new M,p=w_;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,u);const m=new M;m.copy(u),ze.pointToWorldFrame(i,r,m,u);const f=S_;if(u.vsub(n,f),p.dot(f)<=0){if(d)return!0;const x=this.createContactEquation(o,a,e,t,l,h);x.ni.copy(p);const w=E_;p.scale(f.dot(p),w),u.vsub(w,w),x.ri.copy(w),x.ri.vsub(o.position,x.ri),x.rj.copy(u),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const kn=new M,Ci=new M,Li=new M,v_=new M,y_=new M,M_=new Qe,b_=new Qe,w_=new M,S_=new M,E_=new M,T_=new M,A_=new M;new M;const C_=new M,L_=new M,R_=new M,P_=new M,I_=new M,D_=new M,N_=new M,F_=new M,z_=new M,O_=new M,B_=new M,U_=new Ct,k_=[],sr=new M,Xl=new M,G_=new M,V_=new M,H_=new M;function W_(c,e,t){let n=null;const i=c.length;for(let s=0;s!==i;s++){const r=c[s],o=G_;c[(s+1)%i].vsub(r,o);const a=V_;o.cross(e,a);const l=H_;t.vsub(r,l);const h=a.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const rr=new M,q_=new M,j_=new M,X_=new M,Y_=[new M,new M,new M,new M,new M,new M],K_=new M,Z_=new M,$_=new M,J_=new M,Q_=new M,ex=new M,tx=new M,nx=new M,ix=new M,sx=new M,rx=new M,ox=new M,ax=new M,lx=new M;new M;new M;const cx=new M,hx=new M,ux=new M,dx=new M,fx=new M,px=new M,mx=new M,gx=new M,_x=new M,xx=new M,Yl=new Qe,vx=new M;new M;const yx=new M,Kl=new M,Mx=new M,bx=new M,wx=new M,Sx=[0],Ex=new M,Tx=new M;class Zl{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let l=!1;const h=n[a];for(;h>i[o];)o++;l=h===i[o],l||$l(e,h)}o=0;for(let a=0;a<r;a++){let l=!1;const h=i[a];for(;h>n[o];)o++;l=n[o]===h,l||$l(t,h)}}}function $l(c,e){c.push((e&4294901760)>>16,e&65535)}const ho=(c,e)=>c<e?`${c}-${e}`:`${e}-${c}`;class Ax{constructor(){this.data={keys:[]}}get(e,t){const n=ho(e,t);return this.data[n]}set(e,t,n){const i=ho(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=ho(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class Cx extends Hc{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new D0,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new d_,this.constraints=[],this.narrowphase=new x_(this),this.collisionMatrix=new zl,this.collisionMatrixPrevious=new zl,this.bodyOverlapKeeper=new Zl,this.shapeOverlapKeeper=new Zl,this.contactmaterials=[],this.contactMaterialTable=new Ax,this.defaultMaterial=new li("default"),this.defaultContactMaterial=new ai(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof hr?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Je.ALL,n.from=e,n.to=t,n.callback=i,uo.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Je.ANY,n.from=e,n.to=t,n.result=i,uo.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Je.CLOSEST,n.from=e,n.to=t,n.result=i,uo.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof de&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===e)return r}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=st.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=st.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(st.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const r=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Dx,i=Nx,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,h=this.profile,d=de.DYNAMIC;let u=-1/0;const p=this.constraints,g=Ix;a.length();const m=a.x,f=a.y,_=a.z;let x=0;for(l&&(u=st.now()),x=0;x!==s;x++){const D=r[x];if(D.type===d){const P=D.force,F=D.mass;P.x+=F*m,P.y+=F*f,P.z+=F*_}}for(let D=0,P=this.subsystems.length;D!==P;D++)this.subsystems[D].update();l&&(u=st.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=st.now()-u);let w=p.length;for(x=0;x!==w;x++){const D=p[x];if(!D.collideConnected)for(let P=n.length-1;P>=0;P-=1)(D.bodyA===n[P]&&D.bodyB===i[P]||D.bodyB===n[P]&&D.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(u=st.now());const b=Px,v=t.length;for(x=0;x!==v;x++)b.push(t[x]);t.length=0;const S=this.frictionEquations.length;for(x=0;x!==S;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,b,this.frictionEquations,g),l&&(h.narrowphase=st.now()-u),l&&(u=st.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);const R=t.length;for(let D=0;D!==R;D++){const P=t[D],F=P.bi,I=P.bj,q=P.si,k=P.sj;let U;if(F.material&&I.material?U=this.getContactMaterial(F.material,I.material)||this.defaultContactMaterial:U=this.defaultContactMaterial,U.friction,F.material&&I.material&&(F.material.friction>=0&&I.material.friction>=0&&F.material.friction*I.material.friction,F.material.restitution>=0&&I.material.restitution>=0&&(P.restitution=F.material.restitution*I.material.restitution)),o.addEquation(P),F.allowSleep&&F.type===de.DYNAMIC&&F.sleepState===de.SLEEPING&&I.sleepState===de.AWAKE&&I.type!==de.STATIC){const W=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),J=I.sleepSpeedLimit**2;W>=J*2&&(F.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===de.DYNAMIC&&I.sleepState===de.SLEEPING&&F.sleepState===de.AWAKE&&F.type!==de.STATIC){const W=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),J=F.sleepSpeedLimit**2;W>=J*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,I,!0),this.collisionMatrixPrevious.get(F,I)||(rs.body=I,rs.contact=P,F.dispatchEvent(rs),rs.body=F,I.dispatchEvent(rs)),this.bodyOverlapKeeper.set(F.id,I.id),this.shapeOverlapKeeper.set(q.id,k.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=st.now()-u,u=st.now()),x=0;x!==s;x++){const D=r[x];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(w=p.length,x=0;x!==w;x++){const D=p[x];D.update();for(let P=0,F=D.equations.length;P!==F;P++){const I=D.equations[P];o.addEquation(I)}}o.solve(e,this),l&&(h.solve=st.now()-u),o.removeAllEquations();const y=Math.pow;for(x=0;x!==s;x++){const D=r[x];if(D.type&d){const P=y(1-D.linearDamping,e),F=D.velocity;F.scale(P,F);const I=D.angularVelocity;if(I){const q=y(1-D.angularDamping,e);I.scale(q,I)}}}this.dispatchEvent(Rx),l&&(u=st.now());const O=this.stepnumber%(this.quatNormalizeSkip+1)===0,B=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(e,O,B);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=st.now()-u),this.stepnumber+=1,this.dispatchEvent(Lx);let K=!0;if(this.allowSleep)for(K=!1,x=0;x!==s;x++){const D=r[x];D.sleepTick(this.time),D.sleepState!==de.SLEEPING&&(K=!0)}this.hasActiveBodies=K}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(cn,hn),e){for(let s=0,r=cn.length;s<r;s+=2)os.bodyA=this.getBodyById(cn[s]),os.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(os);os.bodyA=os.bodyB=null}if(t){for(let s=0,r=hn.length;s<r;s+=2)as.bodyA=this.getBodyById(hn[s]),as.bodyB=this.getBodyById(hn[s+1]),this.dispatchEvent(as);as.bodyA=as.bodyB=null}cn.length=hn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(cn,hn),n){for(let s=0,r=cn.length;s<r;s+=2){const o=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=o,un.shapeB=a,o&&(un.bodyA=o.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}if(i){for(let s=0,r=hn.length;s<r;s+=2){const o=this.getShapeById(hn[s]),a=this.getShapeById(hn[s+1]);dn.shapeA=o,dn.shapeB=a,o&&(dn.bodyA=o.body),a&&(dn.bodyB=a.body),this.dispatchEvent(dn)}dn.bodyA=dn.bodyB=dn.shapeA=dn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ct;const uo=new Je,st=globalThis.performance||{};if(!st.now){let c=Date.now();st.timing&&st.timing.navigationStart&&(c=st.timing.navigationStart),st.now=()=>Date.now()-c}new M;const Lx={type:"postStep"},Rx={type:"preStep"},rs={type:de.COLLIDE_EVENT_NAME,body:null,contact:null},Px=[],Ix=[],Dx=[],Nx=[],cn=[],hn=[],os={type:"beginContact",bodyA:null,bodyB:null},as={type:"endContact",bodyA:null,bodyB:null},un={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},dn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Jl={type:"change"},fo={type:"start"},Ql={type:"end"};class Fx extends ri{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:fi.ROTATE,TWO:fi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Mt),this._domElementKeyEvents=T},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Jl),n.update(),s=i.NONE},this.update=function(){const T=new N,Q=new _n().setFromUnitVectors(e.up,new N(0,1,0)),ie=Q.clone().invert(),le=new N,oe=new _n,ve=2*Math.PI;return function(){const qe=n.object.position;T.copy(qe).sub(n.target),T.applyQuaternion(Q),o.setFromVector3(T),n.autoRotate&&s===i.NONE&&C(R()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let z=n.minAzimuthAngle,se=n.maxAzimuthAngle;return isFinite(z)&&isFinite(se)&&(z<-Math.PI?z+=ve:z>Math.PI&&(z-=ve),se<-Math.PI?se+=ve:se>Math.PI&&(se-=ve),z<=se?o.theta=Math.max(z,Math.min(se,o.theta)):o.theta=o.theta>(z+se)/2?Math.max(z,o.theta):Math.min(se,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),T.setFromSpherical(o),T.applyQuaternion(ie),qe.copy(n.target).add(T),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),h.set(0,0,0)),l=1,d||le.distanceToSquared(n.object.position)>r||8*(1-oe.dot(n.object.quaternion))>r?(n.dispatchEvent(Jl),le.copy(n.object.position),oe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",Ke),n.domElement.removeEventListener("pointercancel",yt),n.domElement.removeEventListener("wheel",Lt),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",tt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Mt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Il,a=new Il;let l=1;const h=new N;let d=!1;const u=new ye,p=new ye,g=new ye,m=new ye,f=new ye,_=new ye,x=new ye,w=new ye,b=new ye,v=[],S={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function C(T){a.theta-=T}function O(T){a.phi-=T}const B=function(){const T=new N;return function(ie,le){T.setFromMatrixColumn(le,0),T.multiplyScalar(-ie),h.add(T)}}(),K=function(){const T=new N;return function(ie,le){n.screenSpacePanning===!0?T.setFromMatrixColumn(le,1):(T.setFromMatrixColumn(le,0),T.crossVectors(n.object.up,T)),T.multiplyScalar(ie),h.add(T)}}(),D=function(){const T=new N;return function(ie,le){const oe=n.domElement;if(n.object.isPerspectiveCamera){const ve=n.object.position;T.copy(ve).sub(n.target);let Re=T.length();Re*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ie*Re/oe.clientHeight,n.object.matrix),K(2*le*Re/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ie*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),K(le*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(T){n.object.isPerspectiveCamera?l/=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(T){n.object.isPerspectiveCamera?l*=T:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/T)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(T){u.set(T.clientX,T.clientY)}function q(T){x.set(T.clientX,T.clientY)}function k(T){m.set(T.clientX,T.clientY)}function U(T){p.set(T.clientX,T.clientY),g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;C(2*Math.PI*g.x/Q.clientHeight),O(2*Math.PI*g.y/Q.clientHeight),u.copy(p),n.update()}function W(T){w.set(T.clientX,T.clientY),b.subVectors(w,x),b.y>0?P(y()):b.y<0&&F(y()),x.copy(w),n.update()}function J(T){f.set(T.clientX,T.clientY),_.subVectors(f,m).multiplyScalar(n.panSpeed),D(_.x,_.y),m.copy(f),n.update()}function H(T){T.deltaY<0?F(y()):T.deltaY>0&&P(y()),n.update()}function ee(T){let Q=!1;switch(T.code){case n.keys.UP:D(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),Q=!0;break}Q&&(T.preventDefault(),n.update())}function ue(){if(v.length===1)u.set(v[0].pageX,v[0].pageY);else{const T=.5*(v[0].pageX+v[1].pageX),Q=.5*(v[0].pageY+v[1].pageY);u.set(T,Q)}}function ge(){if(v.length===1)m.set(v[0].pageX,v[0].pageY);else{const T=.5*(v[0].pageX+v[1].pageX),Q=.5*(v[0].pageY+v[1].pageY);m.set(T,Q)}}function Z(){const T=v[0].pageX-v[1].pageX,Q=v[0].pageY-v[1].pageY,ie=Math.sqrt(T*T+Q*Q);x.set(0,ie)}function Pe(){n.enableZoom&&Z(),n.enablePan&&ge()}function _e(){n.enableZoom&&Z(),n.enableRotate&&ue()}function Me(T){if(v.length==1)p.set(T.pageX,T.pageY);else{const ie=xe(T),le=.5*(T.pageX+ie.x),oe=.5*(T.pageY+ie.y);p.set(le,oe)}g.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Q=n.domElement;C(2*Math.PI*g.x/Q.clientHeight),O(2*Math.PI*g.y/Q.clientHeight),u.copy(p)}function pe(T){if(v.length===1)f.set(T.pageX,T.pageY);else{const Q=xe(T),ie=.5*(T.pageX+Q.x),le=.5*(T.pageY+Q.y);f.set(ie,le)}_.subVectors(f,m).multiplyScalar(n.panSpeed),D(_.x,_.y),m.copy(f)}function Be(T){const Q=xe(T),ie=T.pageX-Q.x,le=T.pageY-Q.y,oe=Math.sqrt(ie*ie+le*le);w.set(0,oe),b.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),P(b.y),x.copy(w)}function Ee(T){n.enableZoom&&Be(T),n.enablePan&&pe(T)}function me(T){n.enableZoom&&Be(T),n.enableRotate&&Me(T)}function Ke(T){n.enabled!==!1&&(v.length===0&&(n.domElement.setPointerCapture(T.pointerId),n.domElement.addEventListener("pointermove",at),n.domElement.addEventListener("pointerup",tt)),te(T),T.pointerType==="touch"?L(T):nt(T))}function at(T){n.enabled!==!1&&(T.pointerType==="touch"?E(T):Ue(T))}function tt(T){ne(T),v.length===0&&(n.domElement.releasePointerCapture(T.pointerId),n.domElement.removeEventListener("pointermove",at),n.domElement.removeEventListener("pointerup",tt)),n.dispatchEvent(Ql),s=i.NONE}function yt(T){ne(T)}function nt(T){let Q;switch(T.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case di.DOLLY:if(n.enableZoom===!1)return;q(T),s=i.DOLLY;break;case di.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enablePan===!1)return;k(T),s=i.PAN}else{if(n.enableRotate===!1)return;I(T),s=i.ROTATE}break;case di.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(n.enableRotate===!1)return;I(T),s=i.ROTATE}else{if(n.enablePan===!1)return;k(T),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(fo)}function Ue(T){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;U(T);break;case i.DOLLY:if(n.enableZoom===!1)return;W(T);break;case i.PAN:if(n.enablePan===!1)return;J(T);break}}function Lt(T){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(T.preventDefault(),n.dispatchEvent(fo),H(T),n.dispatchEvent(Ql))}function Mt(T){n.enabled===!1||n.enablePan===!1||ee(T)}function L(T){switch(ae(T),v.length){case 1:switch(n.touches.ONE){case fi.ROTATE:if(n.enableRotate===!1)return;ue(),s=i.TOUCH_ROTATE;break;case fi.PAN:if(n.enablePan===!1)return;ge(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case fi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Pe(),s=i.TOUCH_DOLLY_PAN;break;case fi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(fo)}function E(T){switch(ae(T),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(T),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;pe(T),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(T),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;me(T),n.update();break;default:s=i.NONE}}function Y(T){n.enabled!==!1&&T.preventDefault()}function te(T){v.push(T)}function ne(T){delete S[T.pointerId];for(let Q=0;Q<v.length;Q++)if(v[Q].pointerId==T.pointerId){v.splice(Q,1);return}}function ae(T){let Q=S[T.pointerId];Q===void 0&&(Q=new ye,S[T.pointerId]=Q),Q.set(T.pageX,T.pageY)}function xe(T){const Q=T.pointerId===v[0].pointerId?v[1]:v[0];return S[Q.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",Ke),n.domElement.addEventListener("pointercancel",yt),n.domElement.addEventListener("wheel",Lt,{passive:!1}),this.update()}}class zx extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gx(t)}),this.register(function(t){return new Yx(t)}),this.register(function(t){return new Kx(t)}),this.register(function(t){return new Hx(t)}),this.register(function(t){return new Wx(t)}),this.register(function(t){return new qx(t)}),this.register(function(t){return new jx(t)}),this.register(function(t){return new kx(t)}),this.register(function(t){return new Xx(t)}),this.register(function(t){return new Vx(t)}),this.register(function(t){return new Bx(t)}),this.register(function(t){return new Zx(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=$n.extractUrlBase(e),this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},a=new Uc(this.manager);a.setPath(this.path),a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{s.parse(l,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={};if(typeof e=="string")s=e;else if($n.decodeText(new Uint8Array(e,0,4))===Jc){try{r[Le.KHR_BINARY_GLTF]=new $x(e)}catch(d){i&&i(d);return}s=r[Le.KHR_BINARY_GLTF].content}else s=$n.decodeText(new Uint8Array(e));const a=JSON.parse(s);if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new hv(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](l);o[d.name]=d,r[d.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const d=a.extensionsUsed[h],u=a.extensionsRequired||[];switch(d){case Le.KHR_MATERIALS_UNLIT:r[d]=new Ux;break;case Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:r[d]=new ev;break;case Le.KHR_DRACO_MESH_COMPRESSION:r[d]=new Jx(a,this.dracoLoader);break;case Le.KHR_TEXTURE_TRANSFORM:r[d]=new Qx;break;case Le.KHR_MESH_QUANTIZATION:r[d]=new tv;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(r),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ox(){let c={};return{get:function(e){return c[e]},add:function(e,t){c[e]=t},remove:function(e){delete c[e]},removeAll:function(){c={}}}}const Le={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Bx{constructor(e){this.parser=e,this.name=Le.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,a=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new we(16777215);a.color!==void 0&&h.fromArray(a.color);const d=a.range!==void 0?a.range:0;switch(a.type){case"directional":l=new Xg(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qg(h),l.distance=d;break;case"spot":l=new Vc(h),l.distance=d,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,l.angle=a.spot.outerConeAngle,l.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return l.position.set(0,0,0),l.decay=2,a.intensity!==void 0&&(l.intensity=a.intensity),l.name=t.createUniqueName(a.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(a){return n._getNodeRef(t.cache,o,a)})}}class Ux{constructor(){this.name=Le.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){const i=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ge))}return Promise.all(i)}}class kx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Gx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(o,o)}return Promise.all(s)}}class Vx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class Hx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ge)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class Wx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class qx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new we(o[0],o[1],o[2]),Promise.all(s)}}class jx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Xx{constructor(e){this.parser=e,this.name=Le.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:oi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new we(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ge)),Promise.all(s)}}class Yx{constructor(e){this.parser=e,this.name=Le.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class Kx{constructor(e){this.parser=e,this.name=Le.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let a=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(a=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,r.source,a);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Zx{constructor(e){this.name=Le.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([s,r.ready]).then(function(o){const a=i.byteOffset||0,l=i.byteLength||0,h=i.count,d=i.byteStride,u=new ArrayBuffer(h*d),p=new Uint8Array(o[0],a,l);return r.decodeGltfBuffer(new Uint8Array(u),h,d,p,i.mode,i.filter),u})}else return null}}const Jc="glTF",ls=12,ec={JSON:1313821514,BIN:5130562};class $x{constructor(e){this.name=Le.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ls);if(this.header={magic:$n.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-ls,i=new DataView(e,ls);let s=0;for(;s<n;){const r=i.getUint32(s,!0);s+=4;const o=i.getUint32(s,!0);if(s+=4,o===ec.JSON){const a=new Uint8Array(e,ls+s,r);this.content=$n.decodeText(a)}else if(o===ec.BIN){const a=ls+s;this.body=e.slice(a,a+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Jx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Le.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},a={},l={};for(const h in r){const d=Co[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=Co[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],p=Ms[u.componentType];l[d]=p,a[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(u){for(const p in u.attributes){const g=u.attributes[p],m=a[p];m!==void 0&&(g.normalized=m)}d(u)},o,l)})})}}class Qx{constructor(){this.name=Le.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ao extends _r{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),i=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),r=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),o={specular:{value:new we().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=o,this.onBeforeCompile=function(a){for(const l in o)a.uniforms[l]=o[l];a.fragmentShader=a.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",i).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",r)},Object.defineProperties(this,{specular:{get:function(){return o.specular.value},set:function(a){o.specular.value=a}},specularMap:{get:function(){return o.specularMap.value},set:function(a){o.specularMap.value=a,a?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return o.glossiness.value},set:function(a){o.glossiness.value=a}},glossinessMap:{get:function(){return o.glossinessMap.value},set:function(a){o.glossinessMap.value=a,a?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class ev{constructor(){this.name=Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Ao}extendParams(e,t,n){const i=t.extensions[this.name];e.color=new we(1,1,1),e.opacity=1;const s=[];if(Array.isArray(i.diffuseFactor)){const r=i.diffuseFactor;e.color.fromArray(r),e.opacity=r[3]}if(i.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",i.diffuseTexture,Ge)),e.emissive=new we(0,0,0),e.glossiness=i.glossinessFactor!==void 0?i.glossinessFactor:1,e.specular=new we(1,1,1),Array.isArray(i.specularFactor)&&e.specular.fromArray(i.specularFactor),i.specularGlossinessTexture!==void 0){const r=i.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",r)),s.push(n.assignTexture(e,"specularMap",r,Ge))}return Promise.all(s)}createMaterial(e){const t=new Ao(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=pr,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class tv{constructor(){this.name=Le.KHR_MESH_QUANTIZATION}}class Qc extends Es{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=o*2,l=o*3,h=i-t,d=(n-t)/h,u=d*d,p=u*d,g=e*l,m=g-l,f=-2*p+3*u,_=p-u,x=1-f,w=_-u+d;for(let b=0;b!==o;b++){const v=r[m+b+o],S=r[m+b+a]*h,R=r[g+b+o],y=r[g+b]*h;s[b]=x*v+w*S+f*R+_*y}return s}}const nv=new _n;class iv extends Qc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return nv.fromArray(s).normalize().toArray(s),s}}const fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tc={9728:lt,9729:vt,9984:vo,9985:fc,9986:yo,9987:Wi},nc={33071:Dt,33648:lr,10497:Fn},ic={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Co={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ln={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sv={CUBICSPLINE:void 0,LINEAR:ki,STEP:gs},po={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rv(c){return c.DefaultMaterial===void 0&&(c.DefaultMaterial=new _r({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),c.DefaultMaterial}function cs(c,e,t){for(const n in t.extensions)c[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(c,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(c.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ov(c,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(c);const r=[],o=[],a=[];for(let l=0,h=e.length;l<h;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):c.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):c.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):c.attributes.color;a.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const h=l[0],d=l[1],u=l[2];return n&&(c.morphAttributes.position=h),i&&(c.morphAttributes.normal=d),s&&(c.morphAttributes.color=u),c.morphTargetsRelative=!0,c})}function av(c,e){if(c.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)c.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(c.morphTargetInfluences.length===t.length){c.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)c.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lv(c){const e=c.extensions&&c.extensions[Le.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+sc(e.attributes):t=c.indices+":"+sc(c.attributes)+":"+c.mode,t}function sc(c){let e="";const t=Object.keys(c).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+c[t[n]]+";";return e}function Lo(c){switch(c){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cv(c){return c.search(/\.jpe?g($|\?)/i)>0||c.search(/^data\:image\/jpeg/)===0?"image/jpeg":c.search(/\.webp($|\?)/i)>0||c.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class hv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ox,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Gc(this.options.manager):this.textureLoader=new Kg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Uc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};cs(s,o,i),Hn(o,i),Promise.all(n._invokeAll(function(a){return a.afterRoot&&a.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,a=r.length;o<a;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const a=this.associations.get(r);a!=null&&this.associations.set(o,a);for(const[l,h]of r.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this.loadNode(t);break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Le.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load($n.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0)return Promise.resolve(null);const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],a=ic[i.type],l=Ms[i.componentType],h=l.BYTES_PER_ELEMENT,d=h*a,u=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,f;if(p&&p!==d){const _=Math.floor(u/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let w=t.cache.get(x);w||(m=new l(o,_*p,i.count*p/h),w=new wg(m,p/h),t.cache.add(x,w)),f=new Go(w,a,u%p/h,g)}else o===null?m=new l(i.count*a):m=new l(o,u,i.count*a),f=new Et(m,a,g);if(i.sparse!==void 0){const _=ic.SCALAR,x=Ms[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,v=new x(r[1],w,i.sparse.count*_),S=new l(r[2],b,i.sparse.count*a);o!==null&&(f=new Et(f.array.slice(),f.itemSize,f.normalized));for(let R=0,y=v.length;R<y;R++){const C=v[R];if(f.setX(C,S[R*a]),a>=2&&f.setY(C,S[R*a+1]),a>=3&&f.setZ(C,S[R*a+2]),a>=4&&f.setW(C,S[R*a+3]),a>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return f})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const a=n.manager.getHandler(r.uri);a!==null&&(o=a)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],a=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[a])return this.textureCache[a];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,r.name&&(h.name=r.name);const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=tc[u.magFilter]||vt,h.minFilter=tc[u.minFilter]||Wi,h.wrapS=nc[u.wrapS]||Fn,h.wrapT=nc[u.wrapT]||Fn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[a]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let a=r.uri||"",l=!1;if(r.bufferView!==void 0)a=n.getDependency("bufferView",r.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:r.mimeType});return a=o.createObjectURL(u),a});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(a).then(function(d){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(m){const f=new mt(m);f.needsUpdate=!0,u(f)}),t.load($n.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return l===!0&&o.revokeObjectURL(a),d.userData.mimeType=r.mimeType||cv(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",a),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Le.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Le.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(r);r=s.extensions[Le.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,a)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Nc,jt.prototype.copy.call(a,n),a.color.copy(n.color),a.map=n.map,a.sizeAttenuation=!1,this.cache.add(o,a)),n=a}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let a=this.cache.get(o);a||(a=new Dc,jt.prototype.copy.call(a,n),a.color.copy(n.color),this.cache.add(o,a)),n=a}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(o+="specular-glossiness:"),i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let a=this.cache.get(o);a||(a=n.clone(),s&&(a.vertexColors=!0),r&&(a.flatShading=!0),i&&(a.normalScale&&(a.normalScale.y*=-1),a.clearcoatNormalScale&&(a.clearcoatNormalScale.y*=-1)),this.cache.add(o,a),this.associations.set(a,this.associations.get(n))),n=a}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return _r}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},a=s.extensions||{},l=[];if(a[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const d=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else if(a[Le.KHR_MATERIALS_UNLIT]){const d=i[Le.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ge)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Jn);const h=s.alphaMode||po.OPAQUE;if(h===po.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===po.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==In&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new ye(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&r!==In&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==In&&(o.emissive=new we().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==In&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ge)),Promise.all(l).then(function(){let d;return r===Ao?d=i[Le.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(o):d=new r(o),s.name&&(d.name=s.name),Hn(d,s),t.associations.set(d,{materials:e}),s.extensions&&cs(i,d,s),d})}createUniqueName(e){const t=Ve.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Le.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(a){return rc(a,o,t)})}const r=[];for(let o=0,a=e.length;o<a;o++){const l=e[o],h=lv(l),d=i[h];if(d)r.push(d.promise);else{let u;l.extensions&&l.extensions[Le.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=rc(new Yt,l,t),i[h]={primitive:l,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let a=0,l=r.length;a<l;a++){const h=r[a].material===void 0?rv(this.cache):this.getDependency("material",r[a].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(a){const l=a.slice(0,a.length-1),h=a[a.length-1],d=[];for(let p=0,g=h.length;p<g;p++){const m=h[p],f=r[p];let _;const x=l[p];if(f.mode===fn.TRIANGLES||f.mode===fn.TRIANGLE_STRIP||f.mode===fn.TRIANGLE_FAN||f.mode===void 0)_=s.isSkinnedMesh===!0?new Eg(m,x):new Ft(m,x),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),f.mode===fn.TRIANGLE_STRIP?_.geometry=oc(_.geometry,su):f.mode===fn.TRIANGLE_FAN&&(_.geometry=oc(_.geometry,mc));else if(f.mode===fn.LINES)_=new Cg(m,x);else if(f.mode===fn.LINE_STRIP)_=new Ho(m,x);else if(f.mode===fn.LINE_LOOP)_=new Lg(m,x);else if(f.mode===fn.POINTS)_=new Rg(m,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);Object.keys(_.geometry.morphAttributes).length>0&&av(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Hn(_,s),f.extensions&&cs(i,_,f),t.assignFinalMaterial(_),d.push(_)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return d[0];const u=new Yn;t.associations.set(u,{meshes:e});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new pt(No.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Uo(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(i){return n.inverseBindMatrices=i,n})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],a=[];for(let l=0,h=n.channels.length;l<h;l++){const d=n.channels[l],u=n.samplers[d.sampler],p=d.target,g=p.node!==void 0?p.node:p.id,m=n.parameters!==void 0?n.parameters[u.input]:u.input,f=n.parameters!==void 0?n.parameters[u.output]:u.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",f)),o.push(u),a.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(a)]).then(function(l){const h=l[0],d=l[1],u=l[2],p=l[3],g=l[4],m=[];for(let _=0,x=h.length;_<x;_++){const w=h[_],b=d[_],v=u[_],S=p[_],R=g[_];if(w===void 0)continue;w.updateMatrix();let y;switch(Ln[R.path]){case Ln.weights:y=vs;break;case Ln.rotation:y=ii;break;case Ln.position:case Ln.scale:default:y=ys;break}const C=w.name?w.name:w.uuid,O=S.interpolation!==void 0?sv[S.interpolation]:ki,B=[];Ln[R.path]===Ln.weights?w.traverse(function(D){D.morphTargetInfluences&&B.push(D.name?D.name:D.uuid)}):B.push(C);let K=v.array;if(v.normalized){const D=Lo(K.constructor),P=new Float32Array(K.length);for(let F=0,I=K.length;F<I;F++)P[F]=K[F]*D;K=P}for(let D=0,P=B.length;D<P;D++){const F=new y(B[D]+"."+Ln[R.path],b.array,K,O);S.interpolation==="CUBICSPLINE"&&(F.createInterpolant=function(q){const k=this instanceof ii?iv:Qc;return new k(this.times,this.values,this.getValueSize()/3,q)},F.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(F)}}const f=n.name?n.name:"animation_"+e;return new Og(f,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(!!o.isMesh)for(let a=0,l=i.weights.length;a<l;a++)o.morphTargetInfluences[a]=i.weights[a]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],a=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return a&&o.push(a),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),Promise.all(o)}().then(function(o){let a;if(s.isBone===!0?a=new Ic:o.length>1?a=new Yn:o.length===1?a=o[0]:a=new et,a!==o[0])for(let l=0,h=o.length;l<h;l++)a.add(o[l]);if(s.name&&(a.userData.name=s.name,a.name=r),Hn(a,s),s.extensions&&cs(n,a,s),s.matrix!==void 0){const l=new Fe;l.fromArray(s.matrix),a.applyMatrix4(l)}else s.translation!==void 0&&a.position.fromArray(s.translation),s.rotation!==void 0&&a.quaternion.fromArray(s.rotation),s.scale!==void 0&&a.scale.fromArray(s.scale);return i.associations.has(a)||i.associations.set(a,{}),i.associations.get(a).nodes=e,a})}loadScene(e){const t=this.json,n=this.extensions,i=this.json.scenes[e],s=this,r=new Yn;i.name&&(r.name=s.createUniqueName(i.name)),Hn(r,i),i.extensions&&cs(n,r,i);const o=i.nodes||[],a=[];for(let l=0,h=o.length;l<h;l++)a.push(eh(o[l],r,t,s));return Promise.all(a).then(function(){const l=h=>{const d=new Map;for(const[u,p]of s.associations)(u instanceof jt||u instanceof mt)&&d.set(u,p);return h.traverse(u=>{const p=s.associations.get(u);p!=null&&d.set(u,p)}),d};return s.associations=l(r),r})}}function eh(c,e,t,n){const i=t.nodes[c];return n.getDependency("node",c).then(function(s){if(i.skin===void 0)return s;let r;return n.getDependency("skin",i.skin).then(function(o){r=o;const a=[];for(let l=0,h=r.joints.length;l<h;l++)a.push(n.getDependency("node",r.joints[l]));return Promise.all(a)}).then(function(o){return s.traverse(function(a){if(!a.isMesh)return;const l=[],h=[];for(let d=0,u=o.length;d<u;d++){const p=o[d];if(p){l.push(p);const g=new Fe;r.inverseBindMatrices!==void 0&&g.fromArray(r.inverseBindMatrices.array,d*16),h.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',r.joints[d])}a.bind(new Vo(l,h),a.matrixWorld)}),s})}).then(function(s){e.add(s);const r=[];if(i.children){const o=i.children;for(let a=0,l=o.length;a<l;a++){const h=o[a];r.push(eh(h,s,t,n))}}return Promise.all(r)})}function uv(c,e,t){const n=e.attributes,i=new qi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],a=o.min,l=o.max;if(a!==void 0&&l!==void 0){if(i.set(new N(a[0],a[1],a[2]),new N(l[0],l[1],l[2])),o.normalized){const h=Lo(Ms[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,a=new N;for(let l=0,h=s.length;l<h;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(a.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),a.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),a.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const m=Lo(Ms[u.componentType]);a.multiplyScalar(m)}o.max(a)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}c.boundingBox=i;const r=new ji;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,c.boundingSphere=r}function rc(c,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(a){c.setAttribute(o,a)})}for(const r in n){const o=Co[r]||r.toLowerCase();o in c.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!c.index){const r=t.getDependency("accessor",e.indices).then(function(o){c.setIndex(o)});i.push(r)}return Hn(c,e),uv(c,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ov(c,e.targets,t):c})}function oc(c,e){let t=c.getIndex();if(t===null){const r=[],o=c.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);c.setIndex(r),t=c.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),c}const n=t.count-2,i=[];if(e===mc)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=c.clone();return s.setIndex(i),s}class th{constructor(e){this.scene=e.scene,this.world=e.cannonWorld,this.gltfLoader=e.gltfLoader,this.goalsMaterial=e.goalsMaterial,this.name=e.name,this.x=e.x||0,this.y=e.y||10,this.z=e.z||0,this.gltfLoader.load("./assets/model/target.glb",t=>{this.mesh=t.scene.children[0],this.mesh.name=this.name,this.mesh.scale.set(3,3,3),this.mesh.rotation.z=Math.PI/2,this.mesh.position.set(this.x,this.y,this.z),this.scene.add(this.mesh),this.setCannonBody()})}setCannonBody(){let e=new M(this.x,this.y-1.2,this.z);this.shape=new h_(1.8,1.8,.3,10),this.body=new de({mass:0,position:e,shape:this.shape,material:this.goalsMaterial}),this.body.quaternion.setFromAxisAngle(new M(1,0,0),Math.PI/2),this.mesh.cannonBody=this.body,this.world.addBody(this.body)}}class nh{constructor(e){this.scene=e.scene,this.world=e.cannonWorld,this.name=e.name,this.ballsMaterial=e.ballsMaterial,this.geometry=new Wo,this.material=new Pg({color:"gray"}),this.mesh=new Ft(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(0,1,20),this.mesh.castShadow=!0,this.scene.add(this.mesh),this.shape=new c_(1),this.body=new de({mass:1,position:new M(0,1,20),shape:this.shape,material:this.ballsMaterial,collisionFilterGroup:2,collisionFilterMask:1}),this.mesh.cannonBody=this.body,this.world.addBody(this.body)}}const Nn=document.querySelector(".canvas"),bs=document.querySelector(".progress"),dv=bs.querySelector(".bar"),fv=document.querySelector(".status_score span"),pv=document.querySelector(".status_lives span");let $o=0,ac=0,yr=!1,Ro=0;const si=new Pc({canvas:Nn,antialias:!0});si.setSize(window.innerWidth,window.innerHeight);si.shadowMap.enabled=!0;const Tt=new bg,Xt=new pt(75,window.innerWidth/window.innerHeight,.1,1e3);Xt.position.set(0,12,32);Xt.lookAt(0,0,0);Tt.add(Xt);const As=new Bc;As.onStart=()=>{console.log("\uB85C\uB4DC \uC2DC\uC791")};As.onProgress=c=>{console.log(c+"\uB85C\uB4DC")};As.onLoad=()=>{console.log("\uB85C\uB4DC \uC644\uB8CC")};As.onError=()=>{console.log("\uB85C\uB4DC \uC5D0\uB7EC")};const ih=new zx,mv=new Gc(As),gv=new Vg,Cs=new Fx(Xt,si.domElement);Cs.minDistance=30;Cs.maxDistance=50;Cs.maxPolarAngle=No.degToRad(70);Cs.minPolarAngle=No.degToRad(20);const _v=new Yg("#fff",.1),Ls=new Vc("#fff",1);Ls.castShadow=!0;Ls.shadow.mapSize.width=2048;Ls.shadow.mapSize.height=2048;Ls.position.set(0,10,50);Tt.add(_v,Ls);const xv=gv.setPath("./assets/textures/background2/").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]);Tt.background=xv;const At=new Cx;At.gravity.set(0,-40,0);At.broadphase=new Ii(At);const ur=new li("default"),Mr=new li("ball"),Jo=new li("goal"),vv=new ai(ur,ur,{friction:.5,restitution:.3}),yv=new ai(Mr,ur,{friction:.5,restitution:.7}),Mv=new ai(Mr,Jo,{friction:.5,restitution:.7});At.defaultContactMaterial=vv;At.addContactMaterial(yv);At.addContactMaterial(Mv);const Rs=mv.load("./assets/textures/floor.jpg");Rs.wrapS=Fn;Rs.wrapT=Fn;Rs.repeat.x=10;Rs.repeat.y=10;const bv=new In({map:Rs}),wv=new Xi(500,.2,500),sh=new Ft(wv,bv),Sv=new vr(new M(25,.1,25)),Ev=new de({mass:0,position:new M(0,0,0),shape:Sv,material:ur});sh.receiveShadow=!0;Tt.add(sh);At.addBody(Ev);const Po=[];let ps=1,Tv=new th({scene:Tt,cannonWorld:At,gltfLoader:ih,goalsMaterial:Jo,name:`\uACFC\uB141${ps}`});Po.push(Tv);ps++;const Qo=[];let Rn=1,Av=new nh({scene:Tt,cannonWorld:At,ballsMaterial:Mr,name:`\uACF5${Rn}`});Qo.push(Av);Rn++;const Cv=new Zg,rh=function(){const c=Cv.getDelta();let e=1/60;c<.01&&(e=1/120),Cs.update(),At.step(e,c,3),Qo.forEach(t=>{t.mesh.cannonBody&&(t.mesh.position.copy(t.mesh.cannonBody.position),t.mesh.quaternion.copy(t.mesh.cannonBody.quaternion))}),si.render(Tt,Xt),si.setAnimationLoop(rh),yr&&(ws=Math.min(2800,(Date.now()-$o)*3),Ro=ws/2800*100,dv.style.width=Ro+"%")};rh();const dr=new o0,Hi=new ye;let ws=1e3;const Lv=function(){dr.setFromCamera(Hi,Xt);const c=dr.intersectObjects(Tt.children);for(const e of c)if(e.object.name==`\uACF5${Rn-1}`){const t=-Xt.position.x*50,n=ws,i=-ws;e.object.cannonBody.applyForce(new M(t,n,i)),setTimeout(function(){if(pv.innerText=Math.max(0,10-Rn),Rn<11){let s=new nh({scene:Tt,cannonWorld:At,ballsMaterial:Mr,name:`\uACF5${Rn}`});Qo.push(s),Rn++}},1e3)}},Rv=function(){dr.setFromCamera(Hi,Xt);const c=dr.intersectObjects(Tt.children);for(const e of c)e.object.cannonBody&&(yr=!0,bs.style.opacity="1")},oh=function(){Xt.aspect=window.innerWidth/document.documentElement.clientHeight,Xt.updateProjectionMatrix(),si.setSize(window.innerWidth,document.documentElement.clientHeight),si.render(Tt,Xt)};window.addEventListener("load",oh);window.addEventListener("resize",oh);Nn.addEventListener("mousedown",function(c){Hi.x=c.clientX/Nn.width*2-1,Hi.y=-(c.clientY/Nn.height*2-1),$o=Date.now(),Rv(),yr&&(bs.style.top=`${c.clientY-20}px`,bs.style.left=`${c.clientX}px`)});Nn.addEventListener("mouseup",function(c){ac=Date.now(),ws=Math.min(2800,(ac-$o)*3),yr=!1,Ro=0,bs.style.opacity="0"});let mo=!1;Nn.addEventListener("click",function(c){Hi.x=c.clientX/Nn.width*2-1,Hi.y=-(c.clientY/Nn.height*2-1),Lv(),Pv()});const Pv=function(){Rn!==10&&Po.forEach(c=>{c.mesh.cannonBody&&c.mesh.cannonBody.addEventListener("collide",function(e){mo||(mo=!0,setTimeout(function(){At.removeBody(c.body),Tt.remove(c.mesh),fv.innerText=ps-1;const t=new th({scene:Tt,cannonWorld:At,gltfLoader:ih,goalsMaterial:Jo,name:`\uACFC\uB141${ps}`,x:Math.random()*20-10,y:5+Math.random()*10,z:Math.random()*-20});Po.push(t),ps++,mo=!1},0))})})};
