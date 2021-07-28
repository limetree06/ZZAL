var datas = {
  유저1: {
    짤1: 9,
    짤2: 13,
    짤3: 2,
    짤4: 8,
    짤5: 9,
    짤6: 11,
    짤7: 4,
    짤8: 18,
    짤9: 1,
    짤10: 4,
    짤11: 6,
    짤12: 13,
    짤13: 17,
    짤14: 0,
    짤15: 0,
    짤16: 17,
    짤17: 10,
    짤18: 6,
    짤19: 0,
    짤20: 16,
  },
  유저2: {
    짤1: 14,
    짤2: 16,
    짤3: 20,
    짤4: 17,
    짤5: 19,
    짤6: 1,
    짤7: 20,
    짤8: 16,
    짤9: 6,
    짤10: 20,
    짤11: 2,
    짤12: 16,
    짤13: 13,
    짤14: 4,
    짤15: 18,
    짤16: 2,
    짤17: 5,
    짤18: 20,
    짤19: 1,
    짤20: 19,
  },
  유저3: {
    짤1: 4,
    짤2: 20,
    짤3: 6,
    짤4: 14,
    짤5: 20,
    짤6: 5,
    짤7: 6,
    짤8: 16,
    짤9: 0,
    짤10: 10,
    짤11: 16,
    짤12: 16,
    짤13: 8,
    짤14: 3,
    짤15: 14,
    짤16: 0,
    짤17: 5,
    짤18: 0,
    짤19: 12,
    짤20: 4,
  },
  유저4: {
    짤1: 4,
    짤2: 13,
    짤3: 14,
    짤4: 16,
    짤5: 17,
    짤6: 5,
    짤7: 5,
    짤8: 15,
    짤9: 13,
    짤10: 9,
    짤11: 19,
    짤12: 14,
    짤13: 2,
    짤14: 1,
    짤15: 4,
    짤16: 15,
    짤17: 17,
    짤18: 14,
    짤19: 19,
    짤20: 15,
  },
  유저5: {
    짤1: 8,
    짤2: 4,
    짤3: 10,
    짤4: 14,
    짤5: 15,
    짤6: 0,
    짤7: 12,
    짤8: 5,
    짤9: 3,
    짤10: 13,
    짤11: 12,
    짤12: 19,
    짤13: 0,
    짤14: 10,
    짤15: 6,
    짤16: 19,
    짤17: 6,
    짤18: 16,
    짤19: 8,
    짤20: 15,
  },
  유저6: {
    짤1: 8,
    짤2: 10,
    짤3: 15,
    짤4: 1,
    짤5: 8,
    짤6: 20,
    짤7: 10,
    짤8: 0,
    짤9: 14,
    짤10: 12,
    짤11: 0,
    짤12: 7,
    짤13: 7,
    짤14: 20,
    짤15: 14,
    짤16: 4,
    짤17: 2,
    짤18: 1,
    짤19: 12,
    짤20: 14,
  },
  유저7: {
    짤1: 3,
    짤2: 10,
    짤3: 20,
    짤4: 13,
    짤5: 17,
    짤6: 7,
    짤7: 17,
    짤8: 4,
    짤9: 0,
    짤10: 2,
    짤11: 12,
    짤12: 11,
    짤13: 9,
    짤14: 12,
    짤15: 15,
    짤16: 14,
    짤17: 0,
    짤18: 11,
    짤19: 14,
    짤20: 3,
  },
  유저8: {
    짤1: 16,
    짤2: 16,
    짤3: 2,
    짤4: 8,
    짤5: 17,
    짤6: 15,
    짤7: 12,
    짤8: 6,
    짤9: 4,
    짤10: 8,
    짤11: 16,
    짤12: 9,
    짤13: 6,
    짤14: 14,
    짤15: 2,
    짤16: 18,
    짤17: 8,
    짤18: 18,
    짤19: 14,
    짤20: 18,
  },
  유저9: {
    짤1: 1,
    짤2: 2,
    짤3: 5,
    짤4: 19,
    짤5: 18,
    짤6: 2,
    짤7: 5,
    짤8: 2,
    짤9: 11,
    짤10: 19,
    짤11: 11,
    짤12: 18,
    짤13: 7,
    짤14: 1,
    짤15: 10,
    짤16: 18,
    짤17: 0,
    짤18: 12,
    짤19: 13,
    짤20: 8,
  },
  유저10: {
    짤1: 16,
    짤2: 20,
    짤3: 15,
    짤4: 0,
    짤5: 7,
    짤6: 20,
    짤7: 0,
    짤8: 2,
    짤9: 16,
    짤10: 0,
    짤11: 20,
    짤12: 13,
    짤13: 0,
    짤14: 14,
    짤15: 4,
    짤16: 12,
    짤17: 0,
    짤18: 3,
    짤19: 0,
    짤20: 1,
  },
};

function sim_person(data, name1, name2) {
  var sumX = 0,
    sumY = 0,
    sumPowX = 0,
    sumPowY = 0,
    sumXY = 0,
    count = 0;

  for (var i in data[name1]) {
    sumX = sumX + data[name1][i];
    sumY = sumY + data[name2][i];
    sumPowX = sumPowX + Math.pow(data[name1][i], 2);
    sumPowY = sumPowY + Math.pow(data[name2][i], 2);
    sumXY = sumXY + data[name1][i] * data[name2][i];
    count = count + 1;
  }

  return (
    (sumXY - (sumX * sumY) / count) /
    Math.sqrt(
      (sumPowX - Math.pow(sumX, 2) / count) *
        (sumPowY - Math.pow(sumY, 2) / count)
    )
  );
}

function top_match(data, name, index = 3, sim_function = sim_person) {
  var li = new Object();
  var new_li = new Object();

  var arr = [];
  for (var i in data) {
    if (name != i) {
      li[i] = sim_function(data, name, i);
      //   li.i =
    }
  }
  for (var num in li) {
    arr.push([num, li[num]]);
  }
  arr.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (i in arr) {
    new_li[arr[i][1]] = arr[i][0];
  }
  return new_li; //몇 개까지 보여줄지
}

function getRecommendation(data, person) {
  var result = top_match(data, person, data.length);
  //   console.log(result);
  var simSum = 0,
    score = 0;
  var li = new Array();
  var new_li = [];
  var score_dic = {},
    sim_dic = {};

  var final = new Object();
  var new_final = new Object();

  for (var name in data[person]) {
    if (data[person][name] == 0) {
      for (var sim in result) {
        if (sim < 0) continue;
        score = score + sim * data[result[sim]][name];
        score_dic[name] || (score_dic[name] = 0);
        score_dic[name] = score_dic[name] + score;
        sim_dic[name] || (sim_dic[name] = 0);
        sim_dic[name] = sim_dic[name] + parseFloat(sim);

        score = 0;
      }
    } else {
      final[name] = data[person][name];
    }
  }

  for (var key in score_dic) {
    score_dic[key] = score_dic[key] / sim_dic[key];
    final[key] = score_dic[key];
  }

  for (var num in final) {
    li.push([num, final[num]]);
  }

  li.sort(function (a, b) {
    return b[1] - a[1];
  });

  for (i in li) {
    new_final[li[i][0]] = li[i][1];
  }
  for (i in new_final) {
    console.log(i);
    new_li.push(i);
  }

  return new_li.slice(0, 10); //상위 10개만 출력
}

document.getElementById("container").innerHTML = getRecommendation(
  datas,
  "유저10"
);
