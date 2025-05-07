
        function faktorial(x) {
            if (x === 0 || x === 1) return 1;
            let hasil = 1;
            for (let i = 2; i <= x; i++) hasil *= i;
            return hasil;
        }

        function kombinasi(n, k) {
            return faktorial(n) / (faktorial(k) * faktorial(n - k));
        }

        function binomialP(n, k, p) {
            return kombinasi(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
        }

        function hitung() {
            const n = parseInt(document.getElementById("n").value);
            const p = parseFloat(document.getElementById("p").value);
            const mode = document.getElementById("mode").value;
            const output = document.getElementById("output");
            let hasil = 0;

            if (mode === "exact") {
                const k = parseInt(document.getElementById("k").value);
                hasil = binomialP(n, k, p);
                output.innerText = `P(X = ${k}) = ${hasil.toFixed(5)}`;
            } else if (mode === "cumulative_leq") {
                const k = parseInt(document.getElementById("k").value);
                for (let i = 0; i <= k; i++) hasil += binomialP(n, i, p);
                output.innerText = `P(X ≤ ${k}) = ${hasil.toFixed(5)}`;
            } else if (mode === "cumulative_geq") {
                const k = parseInt(document.getElementById("k").value);
                for (let i = k; i <= n; i++) hasil += binomialP(n, i, p);
                output.innerText = `P(X ≥ ${k}) = ${hasil.toFixed(5)}`;
            } else if (mode === "less_than") {
                const k = parseInt(document.getElementById("k").value);
                for (let i = 0; i < k; i++) hasil += binomialP(n, i, p);
                output.innerText = `P(X < ${k}) = ${hasil.toFixed(5)}`;
            } else if (mode === "greater_than") {
                const k = parseInt(document.getElementById("k").value);
                for (let i = k + 1; i <= n; i++) hasil += binomialP(n, i, p);
                output.innerText = `P(X > ${k}) = ${hasil.toFixed(5)}`;
            } else if (mode === "range") {
                const a = parseInt(document.getElementById("a").value);
                const b = parseInt(document.getElementById("b").value);
                for (let i = a; i <= b; i++) hasil += binomialP(n, i, p);
                output.innerText = `P(${a} ≤ X ≤ ${b}) = ${hasil.toFixed(5)}`;
            }
        }

        function updateFields() {
            const mode = document.getElementById("mode").value;
            document.getElementById("kInput").style.display =
                (mode === "range") ? "none" : "block";
            document.getElementById("rangeInput").style.display =
                (mode === "range") ? "block" : "none";
        }

        particlesJS("particles-js", {
            particles: {
              number: { value: 80 },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.6 },
              size: { value: 2 },
              move: { enable: true, speed: 0.7, out_mode: "out" }
            }
          });