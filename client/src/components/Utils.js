// export function isTactil() {
//     var hasTouchScreen = false;
//     if ('maxTouchPoints' in navigator) {
//         hasTouchScreen = navigator.maxTouchPoints > 0;
//     } else if ('msMaxTouchPoints' in navigator) {
//         hasTouchScreen = navigator.msMaxTouchPoints > 0;
//     } else {
//         var mQ = window.matchMedia && matchMedia('(pointer:coarse)');
//         if (mQ && mQ.media === '(pointer:coarse)') {
//             hasTouchScreen = !!mQ.matches;
//         } else if ('orientation' in window) {
//             hasTouchScreen = true; // dépréciée mais utile au cas où
//         } else {
//             // en dernier recours, on regarde userAgent
//             var UA = navigator.userAgent;
//             hasTouchScreen =
//                 /\b(BlackBerry|webOS|iPhone|IEMobile|Opera Mini)\b/i.test(UA) ||
//                 /\b(Android|Windows Phone|iPad|iPod|Samsung Galaxy Tab)\b/i.test(
//                     UA,
//                 );
//         }
//     }
//     return hasTouchScreen;
// }
