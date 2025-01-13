function calculateAcos() {
    const value = parseFloat(document.getElementById("acosValue").value);
    const acosResult = Math.acos(value);
    document.getElementById("acosResult").innerText = `Math.acos(${value}): ${acosResult}`;
  }
  function calculateAsin() {
    const value = parseFloat(document.getElementById("asinValue").value);
    const asinResult = Math.asin(value);
    document.getElementById("asinResult").innerText = `Math.asin(${value}): ${asinResult}`;
  }
  function calculateAtan() {
    const value = parseFloat(document.getElementById("atanValue").value);
    const atanResult = Math.atan(value);
    document.getElementById("atanResult").innerText = `Math.atan(${value}): ${atanResult}`;
  }
  function calculateCbrt() {
    const value = parseFloat(document.getElementById("cbrtValue").value);
    const cbrtResult = Math.cbrt(value);
    document.getElementById("cbrtResult").innerText = `Math.cbrt(${value}): ${cbrtResult}`;
  }
  function calculateExpm1() {
    const value = parseFloat(document.getElementById("expm1Value").value);
    const expm1Result = Math.expm1(value);
    document.getElementById("expm1Result").innerText = `Math.expm1(${value}): ${expm1Result}`;
  }
  function calculateFround() {
    const value = parseFloat(document.getElementById("froundValue").value);
    const froundResult = Math.fround(value);
    document.getElementById("froundResult").innerText = `Math.fround(${value}): ${froundResult}`;
  }
  function calculateLog10() {
    const value = parseFloat(document.getElementById("log10Value").value);
    if (value <= 0) {
      document.getElementById("log10Result").innerText = "Logarithm base 10 undefined for values <= 0";
    } else {
      const log10Result = Math.log10(value);
      document.getElementById("log10Result").innerText = `Math.log10(${value}): ${log10Result}`;
    }
  }
  function calculatePower() {
    const base = parseFloat(document.getElementById("baseValue").value);
    const exponent = parseFloat(document.getElementById("exponentValue").value);
    const powerResult = Math.pow(base, exponent);
    document.getElementById("powerResult").innerText = `Math.pow(${base}, ${exponent}): ${powerResult}`;
  }
  function generateRandom() {
    const randomResult = Math.random();
    document.getElementById("randomResult").innerText = `Math.random(): ${randomResult}`;
  }
  function calculateRound() {
    const value = parseFloat(document.getElementById("roundValue").value);
    const roundResult = Math.round(value);
    document.getElementById("roundResult").innerText = `Math.round(${value}): ${roundResult}`;
  }
  