/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
const gardenNoAdj = function(N, paths) {
    const G = [...Array(N)].map(_ => new Set());
      paths.forEach(p => {
        if (p[0] > p[1]) G[p[0] - 1].add(p[1] - 1);
        else G[p[1] - 1].add(p[0] - 1);
      });
      const ans = Array(N);
      for (let i = 0; i < N; i++) {
        const colors = Array(5);
        G[i].forEach(neighbor => {
          colors[ans[neighbor]] = 1;
        });
        for (let j = 1; j <= 4; j++) {
          if (!colors[j]) {
            ans[i] = j;
            break;
          }
        }
      }
      return ans;
};
