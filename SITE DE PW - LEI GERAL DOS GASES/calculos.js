const bp1Input = document.getElementById("bpre1");
const bv1Input = document.getElementById("bvol1");
const bp2Input = document.getElementById("bpre2");
const bv2Input = document.getElementById("bvol2");

function boyle() {
  let p1 = bp1Input.value;
  let v1 = bv1Input.value;
  let p2 = bp2Input.value;
  let v2 = bv2Input.value;

  let isValid = [p1, v1, p2, v2].filter((item) => item > 0).length > 2;

  if (!isValid) {
    alert("Digite no mínimo 3 numeros para realizar os cálculos");
    return;
  }

  if (p1 == 0) {
    p1 = (p2 * v2) / v1;
    bp1Input.value = p1;

    return;
  }
  if (v1 == 0) {
    v1 = (p2 * v2) / p1;
    bv1Input.value = v1;

    return;
  }
  if (p2 == 0) {
    p2 = (p1 * v1) / v2;
    bp2Input.value = p2;

    return;
  }
  if (v2 == 0) {
    v2 = (p1 * v1) / p2;
    bv2Input.value = v2;

    return;
  }
}

/*-------------------------------------------------*/

const lt1Input = document.getElementById("ltemp1");
const lv1Input = document.getElementById("lvol1");
const lt2Input = document.getElementById("ltemp2");
const lv2Input = document.getElementById("lvol2");

function lussac() {
  let t1 = lt1Input.value;
  let v1 = lv1Input.value;
  let t2 = lt2Input.value;
  let v2 = lv2Input.value;

  let isValid = [t1, v1, t2, v2].filter((item) => item > 0).length > 2;

  if (!isValid) {
    alert("Digite no mínimo 3 numeros para realizar os cálculos");
    return;
  }

  if (t1 == 0) {
    t1 = (v1 * t2) / v2;
    lt1Input.value = t1;

    return;
  }
  if (v1 == 0) {
    v1 = (t1 * v2) / t2;
    lv1Input.value = v1;

    return;
  }
  if (t2 == 0) {
    t2 = (t1 * v2) / v1;
    lt2Input.value = t2;

    return;
  }
  if (v2 == 0) {
    v2 = (v1 * t2) / t1;
    lv2Input.value = v2;

    return;
  }
}

/*-------------------------------------------------*/

const cp1Input = document.getElementById("cp1");
const ct1Input = document.getElementById("ct1");
const cp2Input = document.getElementById("cp2");
const ct2Input = document.getElementById("ct2");

function charles() {
  let p1 = cp1Input.value;
  let t1 = ct1Input.value;
  let p2 = cp2Input.value;
  let t2 = ct2Input.value;

  let isValid = [p1, t1, p2, t2].filter((item) => item > 0).length > 2;

  if (!isValid) {
    alert("Digite ao Menos 3 numeros");
    return;
  }

  if (p1 == 0) {
    p1 = (p2 * t1) / t2;
    cp1Input.value = p1;

    return;
  }
  if (t1 == 0) {
    t1 = (p1 * t2) / p2;
    ct1Input.value = t1;

    return;
  }
  if (p2 == 0) {
    p2 = (p1 * t2) / t1;
    cp2Input.value = p2;

    return;
  }
  if (t2 == 0) {
    t2 = (p2 * t1) / p1;
    ct2Input.value = t2;

    return;
  }
}

/*-------------------------------------------------*/

const gp1Input = document.getElementById("gp1");
const gv1Input = document.getElementById("gv1");
const gt1Input = document.getElementById("gt1");
const gp2Input = document.getElementById("gp2");
const gv2Input = document.getElementById("gv2");
const gt2Input = document.getElementById("gt2");

function geral() {
  let p1 = gp1Input.value;
  let v1 = gv1Input.value;
  let t1 = gt1Input.value;
  let p2 = gp2Input.value;
  let v2 = gv2Input.value;
  let t2 = gt2Input.value;

  let isValid = [p1, v1, p2, v2, t1, t2].filter((item) => item > 0).length > 4;

  if (!isValid) {
    alert("Digite ao Menos 5 numeros");
    return;
  }

  if (p1 == 0) {
    p1 = (p2 * v2 * t1) / (v1 * t2);
    gp1Input.value = p1;

    return;
  }

  if (v1 == 0) {
    v1 = (p2 * v2 * t1) / (p1 * t2);
    gv1Input.value = v1;

    return;
  }

  if (t2 == 0) {
    t2 = (p2 * v2 * t1) / (p1 * v1);
    gt2Input.value = t2;

    return;
  }

  if (p2 == 0) {
    p2 = (p1 * v1 * t2) / (v2 * t1);
    gp2Input.value = p2;

    return;
  }

  if (v2 == 0) {
    v2 = (p1 * v1 * t2) / (p2 * t1);
    gv2Input.value = v2;

    return;
  }

  if (t1 == 0) {
    t1 = (p1 * v1 * t2) / (p2 * v2);
    gt1Input.value = t1;

    return;
  }
}
