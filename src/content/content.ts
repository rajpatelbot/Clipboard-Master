// /*global chrome*/

// function getColors() {
//   const body = document.querySelector("body");
//   let colors: string[] = [];
//   function isValidHex(value: string) {
//     return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
//   }

//   function isValidRGBA(value: string) {
//     return /rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(value);
//   }

//   function replaceAnythingOtherThanRGBAWithEmpty(value: string) {
//     return value.replace(
//       /rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/,
//       ""
//     );
//   }

//   function getCSSFromNode(item: HTMLElement) {
//     if (item.tagName) {
//       const allCss = getComputedStyle(item);
//       const colorsForElem = [allCss.color, allCss.backgroundColor];
//       if (isValidHex(allCss.background)) {
//         colors.push(allCss.background);
//       } else if (isValidRGBA(allCss.background)) {
//         colors.push(replaceAnythingOtherThanRGBAWithEmpty(allCss.color));
//       }
//       if (colorsForElem.length) {
//         colors.push(...colorsForElem);
//       }
//     }
//   }

//   function getAllContent(childNodes: NodeListOf<ChildNode>) {
//     for (let i = 0; i < childNodes.length; i++) {
//       const item = childNodes[i];
//       if (item.childNodes.length) {
//         getCSSFromNode(item as HTMLElement);
//         getAllContent(item.childNodes);
//       } else {
//         getCSSFromNode(item as HTMLElement);
//       }
//     }
//   }

//   function makeArrayUnique(array: string[]) {
//     return [...new Set(array)].filter((item) => item);
//   }

//   if (body) {
//     getAllContent(body.childNodes);
//     const uniqueColors = makeArrayUnique(colors);
//     (async function () {
//       // @ts-ignore
//       const chromeVar = chrome;
//       chromeVar.runtime.sendMessage({
//         action: "gotColors",
//         colors: uniqueColors,
//       });
//     })();
//   }
// }

// // @ts-ignore
// const chromeVar = chrome;

// chromeVar.runtime.onMessage.addListener(function (message: any) {
//   if (message.action === "getColors") {
//     getColors();
//   }
// });
