c = document.querySelector("#c");
c.width = 1920;
c.height = 1080;
x = c.getContext("2d");
S = Math.sin;
C = Math.cos;
Rn = Math.random;
R = function (r, g, b, a) {
  a = a === undefined ? 1 : a;
  return "rgba(" + (r | 0) + "," + (g | 0) + "," + (b | 0) + "," + a + ")";
};
t = go = 0;
rsz = window.onresize = () => {
  setTimeout(() => {
    if (document.body.clientWidth > document.body.clientHeight * 1.77777778) {
      c.style.height = "100vh";
      setTimeout(() => (c.style.width = c.clientHeight * 1.77777778 + "px"), 0);
    } else {
      c.style.width = "100vw";
      setTimeout(() => (c.style.height = c.clientWidth / 1.77777778 + "px"), 0);
    }
    c.width = 1920;
    c.height = c.width / 1.777777778;
  }, 0);
};
rsz();

Draw = () => {
  if (!t) {
    R = (Rl, Pt, Yw, m) => {
      M = Math;
      A = M.atan2;
      H = M.hypot;
      X = S((p = A(X, Y) + Rl)) * (d = H(X, Y));
      Y = C(p) * d;
      X = S((p = A(X, Z) + Yw)) * (d = H(X, Z));
      Z = C(p) * d;
      Y = S((p = A(Y, Z) + Pt)) * (d = H(Y, Z));
      Z = C(p) * d;
      if (m) {
        X += oX;
        Y += oY;
        Z += oZ;
      }
    };
    Q = () => [c.width / 2 + (X / Z) * 800, c.height / 2 + (Y / Z) * 800];
    I = (A, B, M, D, E, F, G, H) =>
      (K =
        ((G - E) * (B - F) - (H - F) * (A - E)) /
        (J = (H - F) * (M - A) - (G - E) * (D - B))) >= 0 &&
      K <= 1 &&
      (L = ((M - A) * (B - F) - (D - B) * (A - E)) / J) >= 0 &&
      L <= 1
        ? [A + K * (M - A), B + K * (D - B)]
        : 0;
    for (CB = [], j = 6; j--; CB = [...CB, b])
      for (i = 4, b = []; i--; )
        b = [
          ...b,
          [
            (a = [
              S((p = ((Math.PI * 2) / 4) * i + Math.PI / 4)) *
                (l = 2 ** 0.5 / 2),
              C(p) * l,
              0.5,
            ])[j % 3] * (l = j < 3 ? 1 : -1),
            a[(j + 1) % 3] * l,
            a[(j + 2) % 3] * l,
          ],
        ];

    stroke = (scol, fcol) => {
      if (scol) {
        x.closePath();
        //x.globalAlpha=.2
        x.strokeStyle = scol;
        x.lineWidth = Math.min(500, 600 / Z);
        //x.stroke()
        x.globalAlpha = 1;
        x.lineWidth /= 4;
        x.stroke();
      }
      if (fcol) {
        x.fillStyle = fcol;
        x.fill();
      }
    };

    (cl = 3), (rw = 3), (br = 20), (sp = 2.5);
    cls = 0.5;
    rws = 0.5;
    brs = 0.2;
    B = Array(cl * rw * br)
      .fill()
      .map((v, i) => {
        X = ((i % cl) - cl / 2 + 0.5) * sp;
        Y = ((((i / cl) | 0) % rw) - rw / 2 + 0.5) * sp;
        Z = (((i / cl / rw) | 0) - br / 2 + 0.5) * sp;
        return [X, Y, Z];
      });

    (G = 150), (iPc = 300);
    P = Array(iPc)
      .fill()
      .map((v) => {
        X = ((Rn() - 0.5) * G * cls) / 1.5;
        Y = ((Rn() - 0.5) * G * rws) / 1.5;
        Z = (Rn() - 0.5) * G * 2;
        return [X, Y, Z, 1 + Rn() * 5, (Rn() * 9) | 0];
      });

    (starsLoaded = false), (starImgs = [{ loaded: false }]);
    starImgs = Array(10)
      .fill()
      .map((v, i) => {
        let a = { img: new Image(), loaded: false };
        a.img.onload = () => {
          a.loaded = true;
          setTimeout(() => {
            if (starImgs.filter((v) => v.loaded).length == 10)
              starsLoaded = true;
          }, 0);
        };
        a.img.src = `https://srmcgann.github.io/stars/star${i ? i : ""}.png`;
        return a;
      });

    bg = new Image();
    go = false;
    bg.onload = () => {
      go = true;
    };
    bg.src =
      "https://photography.whitehot.ninja/2a221f86c865b6dceb8eef1a6b4f061a.jpg";
  }

  if (go) {
    x.globalAlpha = 0.4;
    x.drawImage(bg, 0, 0, c.width, c.height);
    x.globalAlpha = 1;
    x.fillStyle = "#0004";
    x.fillRect(0, 0, c.width, c.height);
    (oX = oY = 0), (oZ = 80);
    (Rl = S(t / 2) * 4), (Pt = -t / 4), (Yw = t / 4);
    x.lineJoin = x.lineCap = "round";

    iPv = 4;
    P.map((v) => {
      X = v[0];
      Y = v[1];
      Z = v[2] -= iPv;
      if (Z < -G) Z = v[2] += G * 2;
      if (0) {
        R(Rl, Pt, Yw, 1);
        if (Z > 0) {
          s = Math.min(1e3, (1e3 * v[3]) / Z);
          x.fillStyle = "#fff2";
          l = Q();
          x.fillRect(l[0] - s / 2, l[1] - s / 2, s, s);
          s /= 5;
          x.fillStyle = "#fffc";
          x.fillRect(l[0] - s / 2, l[1] - s / 2, s, s);
        }
      }
    });

    ls = 50;
    B.map((v) => {
      mins = [6e6, 6e6, 6e6, -6e6, -6e6, -6e6];
      tx = ((v[0] * ls) / 3) * cls;
      ty = ((v[1] * ls) / 3) * rws;
      tz =
        ((v[2] * ls) / 2) *
        brs *
        Math.max(0.33333, Math.min(3, (1 + S(t / 2) * 3) * 1));
      CB.map((q) => {
        x.beginPath();
        q.map((n) => {
          X = tx + ((n[0] * ls) / sp) * cls;
          Y = ty + ((n[1] * ls) / sp) * rws;
          Z = tz + ((n[2] * ls) / sp) * brs;
          if (X < mins[0]) mins[0] = X;
          if (Y < mins[1]) mins[1] = Y;
          if (Z < mins[2]) mins[2] = Z;
          if (X > mins[3]) mins[3] = X;
          if (Y > mins[4]) mins[4] = Y;
          if (Z > mins[5]) mins[5] = Z;
          R(Rl, Pt, Yw, 1);
          if (Z > 0) x.lineTo(...Q());
        });
        stroke("", "#50f1");
      });

      P.map((v) => {
        X = v[0];
        Y = v[1];
        Z = v[2];
        k = true;
        if (X < mins[0]) k = false;
        if (Y < mins[1]) k = false;
        if (Z < mins[2]) k = false;
        if (X > mins[3]) k = false;
        if (Y > mins[4]) k = false;
        if (Z > mins[5]) k = false;
        if (k) {
          R(Rl, Pt, Yw, 1);
          if (Z > 0) {
            l = Q();
            s = Math.min(1e3, (6e3 * v[3]) / Z);
            x.drawImage(
              starImgs[1 + v[4]].img,
              l[0] - s / 2,
              l[1] - s / 2,
              s,
              s
            );
            /*x.fillStyle = '#fff2'
            x.fillRect(l[0]-s/2,l[1]-s/2,s,s)
            s/=5
            x.fillStyle='#fffc'
            x.fillRect(l[0]-s/2,l[1]-s/2,s,s)*/
          }
        }
      });
    });
  }

  t += 1 / 60;
  requestAnimationFrame(Draw);
};
Draw();
