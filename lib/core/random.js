const RandExp = require("randexp");
const optionAPI = require("../api/option");
const env = require("./constants");
function getRandomInteger(min, max) {
  min = typeof min === "undefined" ? env.MIN_INTEGER : min;
  max = typeof max === "undefined" ? env.MAX_INTEGER : max;
  return Math.floor(optionAPI("random")() * (max - min + 1)) + min;
}
function _randexp(value) {
  RandExp.prototype.max = optionAPI("defaultRandExpMax");
  RandExp.prototype.randInt = (a, b) => a + Math.floor(optionAPI("random")() * (1 + (b - a)));
  const re = new RandExp(value);
  return re.gen();
}
function pick(collection) {
  return collection[Math.floor(optionAPI("random")() * collection.length)];
}
function shuffle(collection) {
  let tmp;
  let key;
  let length = collection.length;
  const copy = collection.slice();
  for (; length > 0; ) {
    key = Math.floor(optionAPI("random")() * length);
    length -= 1;
    tmp = copy[length];
    copy[length] = copy[key];
    copy[key] = tmp;
  }
  return copy;
}
function getRandom(min, max) {
  return optionAPI("random")() * (max - min) + min;
}
function number(min, max, defMin, defMax, hasPrecision = false) {
  defMin = typeof defMin === "undefined" ? env.MIN_NUMBER : defMin;
  defMax = typeof defMax === "undefined" ? env.MAX_NUMBER : defMax;
  min = typeof min === "undefined" ? defMin : min;
  max = typeof max === "undefined" ? defMax : max;
  if (max < min) {
    max += min;
  }
  if (hasPrecision) {
    return getRandom(min, max);
  }
  return getRandomInteger(min, max);
}
function by(type) {
  switch (type) {
    case "seconds":
      return number(0, 60) * 60;
    case "minutes":
      return number(15, 50) * 612;
    case "hours":
      return number(12, 72) * 36123;
    case "days":
      return number(7, 30) * 86412345;
    case "weeks":
      return number(4, 52) * 604812345;
    case "months":
      return number(2, 13) * 2592012345;
    case "years":
      return number(1, 20) * 31104012345;
    default:
      break;
  }
}
function date(step) {
  if (step) {
    return by(step);
  }
  const now = new Date();
  const days = number(-1e3, env.MOST_NEAR_DATETIME);
  now.setTime(now.getTime() - days);
  return now;
}
var random_default = {
  pick,
  date,
  shuffle,
  number,
  randexp: _randexp
};
module.exports=random_default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbHZhcm8vV29ya3NwYWNlL2pzb24tc2NoZW1hLWZha2VyL3NyYy9saWIvY29yZS9yYW5kb20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJhbmRFeHAgZnJvbSAncmFuZGV4cCc7XG5cbmltcG9ydCBvcHRpb25BUEkgZnJvbSAnLi4vYXBpL29wdGlvbic7XG5pbXBvcnQgZW52IGZyb20gJy4vY29uc3RhbnRzJztcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50ZWdlcihtaW4sIG1heCkge1xuICBtaW4gPSB0eXBlb2YgbWluID09PSAndW5kZWZpbmVkJyA/IGVudi5NSU5fSU5URUdFUiA6IG1pbjtcbiAgbWF4ID0gdHlwZW9mIG1heCA9PT0gJ3VuZGVmaW5lZCcgPyBlbnYuTUFYX0lOVEVHRVIgOiBtYXg7XG5cbiAgcmV0dXJuIE1hdGguZmxvb3Iob3B0aW9uQVBJKCdyYW5kb20nKSgpICogKChtYXggLSBtaW4pICsgMSkpICsgbWluO1xufVxuXG5mdW5jdGlvbiBfcmFuZGV4cCh2YWx1ZSkge1xuICAvLyBzZXQgbWF4aW11bSBkZWZhdWx0LCBzZWUgIzE5M1xuICBSYW5kRXhwLnByb3RvdHlwZS5tYXggPSBvcHRpb25BUEkoJ2RlZmF1bHRSYW5kRXhwTWF4Jyk7XG5cbiAgLy8gc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyB0aGUgb3JpZ2luYWwgZXhjZXB0IHVzaW5nIG91ciByYW5kb21cbiAgUmFuZEV4cC5wcm90b3R5cGUucmFuZEludCA9IChhLCBiKSA9PiBhICsgTWF0aC5mbG9vcihvcHRpb25BUEkoJ3JhbmRvbScpKCkgKiAoMSArIChiIC0gYSkpKTtcblxuICBjb25zdCByZSA9IG5ldyBSYW5kRXhwKHZhbHVlKTtcblxuICByZXR1cm4gcmUuZ2VuKCk7XG59XG5cbi8qKlxuICogUmV0dXJucyByYW5kb20gZWxlbWVudCBvZiBhIGNvbGxlY3Rpb25cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvblxuICogQHJldHVybnMge1R9XG4gKi9cbmZ1bmN0aW9uIHBpY2soY29sbGVjdGlvbikge1xuICByZXR1cm4gY29sbGVjdGlvbltNYXRoLmZsb29yKG9wdGlvbkFQSSgncmFuZG9tJykoKSAqIGNvbGxlY3Rpb24ubGVuZ3RoKV07XG59XG5cbi8qKlxuICogUmV0dXJucyBzaHVmZmxlZCBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzXG4gKlxuICogQHBhcmFtIGNvbGxlY3Rpb25cbiAqIEByZXR1cm5zIHtUW119XG4gKi9cbmZ1bmN0aW9uIHNodWZmbGUoY29sbGVjdGlvbikge1xuICBsZXQgdG1wO1xuICBsZXQga2V5O1xuICBsZXQgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cbiAgY29uc3QgY29weSA9IGNvbGxlY3Rpb24uc2xpY2UoKTtcblxuICBmb3IgKDsgbGVuZ3RoID4gMDspIHtcbiAgICBrZXkgPSBNYXRoLmZsb29yKG9wdGlvbkFQSSgncmFuZG9tJykoKSAqIGxlbmd0aCk7XG4gICAgLy8gc3dhcFxuICAgIGxlbmd0aCAtPSAxO1xuICAgIHRtcCA9IGNvcHlbbGVuZ3RoXTtcbiAgICBjb3B5W2xlbmd0aF0gPSBjb3B5W2tleV07XG4gICAgY29weVtrZXldID0gdG1wO1xuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoaW5jbHVzaXZlKVxuICogVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG4gKiBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1Mjc4MjAvNzY5Mzg0XG4gKi9cbmZ1bmN0aW9uIGdldFJhbmRvbShtaW4sIG1heCkge1xuICByZXR1cm4gKG9wdGlvbkFQSSgncmFuZG9tJykoKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgcmFuZG9tIG51bWJlciBhY2NvcmRpbmcgdG8gcGFyYW1ldGVycyBwYXNzZWRcbiAqXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcGFyYW0gZGVmTWluXG4gKiBAcGFyYW0gZGVmTWF4XG4gKiBAcGFyYW0gaGFzUHJlY2lzaW9uXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBudW1iZXIobWluLCBtYXgsIGRlZk1pbiwgZGVmTWF4LCBoYXNQcmVjaXNpb24gPSBmYWxzZSkge1xuICBkZWZNaW4gPSB0eXBlb2YgZGVmTWluID09PSAndW5kZWZpbmVkJyA/IGVudi5NSU5fTlVNQkVSIDogZGVmTWluO1xuICBkZWZNYXggPSB0eXBlb2YgZGVmTWF4ID09PSAndW5kZWZpbmVkJyA/IGVudi5NQVhfTlVNQkVSIDogZGVmTWF4O1xuXG4gIG1pbiA9IHR5cGVvZiBtaW4gPT09ICd1bmRlZmluZWQnID8gZGVmTWluIDogbWluO1xuICBtYXggPSB0eXBlb2YgbWF4ID09PSAndW5kZWZpbmVkJyA/IGRlZk1heCA6IG1heDtcblxuICBpZiAobWF4IDwgbWluKSB7XG4gICAgbWF4ICs9IG1pbjtcbiAgfVxuXG4gIGlmIChoYXNQcmVjaXNpb24pIHtcbiAgICByZXR1cm4gZ2V0UmFuZG9tKG1pbiwgbWF4KTtcbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21JbnRlZ2VyKG1pbiwgbWF4KTtcbn1cblxuZnVuY3Rpb24gYnkodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICAgIHJldHVybiBudW1iZXIoMCwgNjApICogNjA7XG5cbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICAgIHJldHVybiBudW1iZXIoMTUsIDUwKSAqIDYxMjtcblxuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICAgIHJldHVybiBudW1iZXIoMTIsIDcyKSAqIDM2MTIzO1xuXG4gICAgY2FzZSAnZGF5cyc6XG4gICAgICByZXR1cm4gbnVtYmVyKDcsIDMwKSAqIDg2NDEyMzQ1O1xuXG4gICAgY2FzZSAnd2Vla3MnOlxuICAgICAgcmV0dXJuIG51bWJlcig0LCA1MikgKiA2MDQ4MTIzNDU7XG5cbiAgICBjYXNlICdtb250aHMnOlxuICAgICAgcmV0dXJuIG51bWJlcigyLCAxMykgKiAyNTkyMDEyMzQ1O1xuXG4gICAgY2FzZSAneWVhcnMnOlxuICAgICAgcmV0dXJuIG51bWJlcigxLCAyMCkgKiAzMTEwNDAxMjM0NTtcblxuICAgIGRlZmF1bHQ6IGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGUoc3RlcCkge1xuICBpZiAoc3RlcCkge1xuICAgIHJldHVybiBieShzdGVwKTtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGRheXMgPSBudW1iZXIoLTEwMDAsIGVudi5NT1NUX05FQVJfREFURVRJTUUpO1xuXG4gIG5vdy5zZXRUaW1lKG5vdy5nZXRUaW1lKCkgLSBkYXlzKTtcblxuICByZXR1cm4gbm93O1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHBpY2ssXG4gIGRhdGUsXG4gIHNodWZmbGUsXG4gIG51bWJlcixcbiAgcmFuZGV4cDogX3JhbmRleHAsXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUVBO0FBQ0E7QUFFQSwwQkFBMEIsS0FBSyxLQUFLO0FBQ2xDLFFBQU0sT0FBTyxRQUFRLGNBQWMsSUFBSSxjQUFjO0FBQ3JELFFBQU0sT0FBTyxRQUFRLGNBQWMsSUFBSSxjQUFjO0FBRXJELFNBQU8sS0FBSyxNQUFNLFVBQVUsY0FBZ0IsT0FBTSxNQUFPLE1BQU07QUFBQTtBQUdqRSxrQkFBa0IsT0FBTztBQUV2QixVQUFRLFVBQVUsTUFBTSxVQUFVO0FBR2xDLFVBQVEsVUFBVSxVQUFVLENBQUMsR0FBRyxNQUFNLElBQUksS0FBSyxNQUFNLFVBQVUsY0FBZSxLQUFLLEtBQUk7QUFFdkYsUUFBTSxLQUFLLElBQUksUUFBUTtBQUV2QixTQUFPLEdBQUc7QUFBQTtBQVNaLGNBQWMsWUFBWTtBQUN4QixTQUFPLFdBQVcsS0FBSyxNQUFNLFVBQVUsY0FBYyxXQUFXO0FBQUE7QUFTbEUsaUJBQWlCLFlBQVk7QUFDM0IsTUFBSTtBQUNKLE1BQUk7QUFDSixNQUFJLFNBQVMsV0FBVztBQUV4QixRQUFNLE9BQU8sV0FBVztBQUV4QixTQUFPLFNBQVMsS0FBSTtBQUNsQixVQUFNLEtBQUssTUFBTSxVQUFVLGNBQWM7QUFFekMsY0FBVTtBQUNWLFVBQU0sS0FBSztBQUNYLFNBQUssVUFBVSxLQUFLO0FBQ3BCLFNBQUssT0FBTztBQUFBO0FBR2QsU0FBTztBQUFBO0FBU1QsbUJBQW1CLEtBQUssS0FBSztBQUMzQixTQUFRLFVBQVUsY0FBZSxPQUFNLE9BQVE7QUFBQTtBQWFqRCxnQkFBZ0IsS0FBSyxLQUFLLFFBQVEsUUFBUSxlQUFlLE9BQU87QUFDOUQsV0FBUyxPQUFPLFdBQVcsY0FBYyxJQUFJLGFBQWE7QUFDMUQsV0FBUyxPQUFPLFdBQVcsY0FBYyxJQUFJLGFBQWE7QUFFMUQsUUFBTSxPQUFPLFFBQVEsY0FBYyxTQUFTO0FBQzVDLFFBQU0sT0FBTyxRQUFRLGNBQWMsU0FBUztBQUU1QyxNQUFJLE1BQU0sS0FBSztBQUNiLFdBQU87QUFBQTtBQUdULE1BQUksY0FBYztBQUNoQixXQUFPLFVBQVUsS0FBSztBQUFBO0FBR3hCLFNBQU8saUJBQWlCLEtBQUs7QUFBQTtBQUcvQixZQUFZLE1BQU07QUFDaEIsVUFBUTtBQUFBLFNBQ0Q7QUFDSCxhQUFPLE9BQU8sR0FBRyxNQUFNO0FBQUEsU0FFcEI7QUFDSCxhQUFPLE9BQU8sSUFBSSxNQUFNO0FBQUEsU0FFckI7QUFDSCxhQUFPLE9BQU8sSUFBSSxNQUFNO0FBQUEsU0FFckI7QUFDSCxhQUFPLE9BQU8sR0FBRyxNQUFNO0FBQUEsU0FFcEI7QUFDSCxhQUFPLE9BQU8sR0FBRyxNQUFNO0FBQUEsU0FFcEI7QUFDSCxhQUFPLE9BQU8sR0FBRyxNQUFNO0FBQUEsU0FFcEI7QUFDSCxhQUFPLE9BQU8sR0FBRyxNQUFNO0FBQUE7QUFFaEI7QUFBQTtBQUFBO0FBSWIsY0FBYyxNQUFNO0FBQ2xCLE1BQUksTUFBTTtBQUNSLFdBQU8sR0FBRztBQUFBO0FBR1osUUFBTSxNQUFNLElBQUk7QUFDaEIsUUFBTSxPQUFPLE9BQU8sTUFBTyxJQUFJO0FBRS9CLE1BQUksUUFBUSxJQUFJLFlBQVk7QUFFNUIsU0FBTztBQUFBO0FBR1QsSUFBTyxpQkFBUTtBQUFBLEVBQ2I7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBLFNBQVM7QUFBQTsiLCJuYW1lcyI6W119