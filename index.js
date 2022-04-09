
const main = () => {

  let reprezentations = [
    { name: "Katar", rang: 51, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Ekvador", rang: 46, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Senegal", rang: 20, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Holandija", rang:10, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Engleska", rang: 5, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Iran", rang: 21, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "SAD", rang: 15, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Ukrajina", rang: 27, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Argentina", rang: 4, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Saudijska Arabija", rang: 49, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Meksiko", rang: 9, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Poljska", rang: 26, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Francuska", rang: 3, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Peru", rang: 22, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Danska", rang: 11, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Tunis", rang: 35, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Španija", rang: 7, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Novi Zeland", rang: 42, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Nemačka", rang: 12, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Japan", rang: 23, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Belgija", rang: 2, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Kanada", rang: 38, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Maroko", rang: 24, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Hrvatska", rang: 16, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Brazil", rang: 1, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Srbija", rang: 25, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Švajcarska", rang: 14, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Kamerun", rang: 37, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    
    { name: "Portugal", rang: 8, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Gana", rang: 60, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Urugvaj", rang: 13, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0},
    { name: "Južna Koreja", rang: 29, wins:0, unsolved:0, losses:0,  givenGoals:0, goalsConceded:0, points: 0}
  ]


  const groups = [];
  for (var i = 0; i < reprezentations.length; i++) {
    let newGroup = {
      group: String.fromCharCode('A'.charCodeAt() + i / 4),
      rep: []
    }
    for (let j = i; j < i + 4; j++) {
      newGroup.rep.push(reprezentations[j]);
    }
    i = i + 3;
    groups.push(newGroup);
  }


  for (let kolo = 1; kolo < 4; kolo++) {
    console.log("KOLO: "+ kolo)
    for (let i = 0; i < groups.length; i++) {
      if(kolo ==1){
        console.log();
        console.log(`Grupa ${groups[i].group}:`);
         match("Gr",groups[i].rep[0],groups[i].rep[1]);
         match("Gr",groups[i].rep[2],groups[i].rep[3]);
      }
      if(kolo ==2){
        console.log();
        console.log(`Grupa ${groups[i].group}: `);
         match("Gr",groups[i].rep[0],groups[i].rep[2]);
         match("Gr",groups[i].rep[1],groups[i].rep[3]);
      }
      if(kolo ==3){
        console.log();
        console.log(`Grupa ${groups[i].group}:`);
         match("Gr",groups[i].rep[0],groups[i].rep[3]);
         match("Gr",groups[i].rep[1],groups[i].rep[2]);
      }
      
    }
  }
  console.log();
  console.log("Kraj grupne faze:");
  console.log("Format:<ime>(<rang>)    <br. pobeda>  <br. nerešenih>  <br. poraza>  <dati golovi>:<primljeni golovi>  <bodovi>");

  function match(str,r1, r2) {

    let num1=5, num2=3;
    let GoalsRandum={half1:0,half2:0,afterHalf1:0,afterHalf2:0}

    if(r1.rang> r2.rang){
      rang(GoalsRandum,num1,num2);
    }else {
      rang(GoalsRandum,num2,num1);
    }

    let goals1= GoalsRandum.half1+GoalsRandum.afterHalf1;
    let goals2= GoalsRandum.half2+GoalsRandum.afterHalf2;

    if(goals1 === goals2){

      if(str==="El"){

        let over =overtime(r1,r2);
        goals1+=over.g1;
        goals2+=over.g2;

        if(over.win==r1){
          SumGoals(goals1, goals2, r1, r2, GoalsRandum.half1, GoalsRandum.half2);
            return r1;
        }else{
          SumGoals(goals2, goals1, r2, r1, GoalsRandum.half2, GoalsRandum.half1);
          return r2;
        }

      }
      r1.points+=1;
      r2.points+=1;
      r1.unsolved+=1;
      r2.unsolved+=1;
      
      console.log(`${r1.name} ${goals1} : ${goals2} ${r2.name}`);
      return;
    }

    if(goals1 > goals2){  
      SumGoals(goals1,goals2,r1,r2,GoalsRandum.half1,GoalsRandum.half2);
      return r1;

    }else if(goals1 < goals2){
      r2.points+=3;
      r2.wins+=1;
      r1.losses+=1; 
      r2.givenGoals+=goals2;
      r2.goalsConceded+=goals1;
      r1.givenGoals+=goals1;
      r1.goalsConceded+=goals2;
      console.log( `${r1.name} ${goals1} : ${goals2} ${r2.name} (Poluvreme  ${GoalsRandum.half1} : ${GoalsRandum.half2})`);
      return r2;
    }
 
  }

  function rang(gr, num1, num2){
    gr.half1= Math.round(Math.random()*num1);
    gr.half2= Math.round(Math.random()*num2);
    gr.afterHalf1= Math.round(Math.random()*num1);
    gr.afterHalf2= Math.round(Math.random()*num2);
  }

  function overtime(r1,r2){
    
    let tf=false;
    for (let i = 1; i <= 2; i++) {
      let goalOverTime1= Math.round(Math.random()*2);
      let goalOverTime2= Math.round(Math.random()*2);

     
      if(goalOverTime1>goalOverTime2){
        tf=true;
        console.log(`${i}. produzetak`);
        return { win:r1, g1:goalOverTime1, g2: goalOverTime2};
      }
      if(goalOverTime1 < goalOverTime2){
        tf=true;
        console.log(`${i}. produzetak`);
        return { win:r2, g1:goalOverTime1, g2: goalOverTime2};
      }
    }

    let sumPenality1 =0, sumPenality2 =0;

    if(tf ===false){
      for (let i = 1; i <= 5; i++) {
        let penalty1= Math.round(Math.random()*2);
        let penalty2= Math.round(Math.random()*2);
        sumPenality1+=penalty1
        sumPenality2+=penalty2;
      
        if(Math.abs(sumPenality1 - sumPenality2)>=3 || (Math.abs(sumPenality1 - sumPenality2) == 2 && i==4) ){
          if(sumPenality1> sumPenality2){
            console.log(`PENALI ${r1.name} ${sumPenality1} : ${sumPenality2} ${r2.name} , Pobednik  ${r1.name}`);
            return { win:r1, g1:0, g2:0};
          }else  if(sumPenality1 < sumPenality2){

            console.log(`PENALI ${r1.name} ${sumPenality1} : ${sumPenality2} ${r2.name} , Pobednik  ${r2.name} `);
            return { win:r2, g1:0, g2:0};
          } 
        }
      }
      
      sumPenality1+=1;
      console.log(`PENALI ${r1.name} ${sumPenality1} : ${sumPenality2} ${r2.name} , Pobednik  ${r1.name}`);
      return {win:r1, g1:0, g2:0};
      
    }

  }


  function SumGoals(g1, g2, r1,r2,h1,h2){
      r1.points+=3;
      r1.wins+=1;
      r2.losses+=1; 
      r1.givenGoals+=g1;
      r1.goalsConceded+=g2;
      r2.givenGoals+=g2;
      r2.goalsConceded+=g1;
      console.log( `${r1.name} ${g1} : ${g2} ${r2.name} (Poluvreme  ${h1} : ${h2})`);
  }

    for (let i = 0; i < groups.length; i++) {
      console.log(`Grupa ${groups[i].group}:`);
        groups[i].rep.sort((a,b) =>  b.points-a.points || b.givenGoals-b.goalsConceded > a.givenGoals-a.goalsConceded|| b.givenGoals - a.givenGoals );
      for (let j = 0; j < groups[i].rep.length; j++) {
        console.log(`${j+1}.  ${groups[i].rep[j].name}(${groups[i].rep[j].rang})                    ${groups[i].rep[j].wins}  ${groups[i].rep[j].unsolved}   ${groups[i].rep[j].losses}  ${groups[i].rep[j].givenGoals}:${groups[i].rep[j].goalsConceded}  ${groups[i].rep[j].points} `);

      }

    }


    let elim=[];
    for (let i = 0; i < groups.length; i++) {
        elim.push([groups[i].rep[0], groups[i].rep[1]]);
    }

    let winers=[];
    console.log();
    console.log("Eliminaciona faza - 1/16 finala:");
    console.log();
    for (let i = 0; i < elim.length-1; i+=2) {
       let r1= match("El", elim[i][0], elim[i+1][1]);
       winers.push(r1);
       let r2= match("El", elim[i][1], elim[i+1][0]);
      winers.push(r2);
    }
    
    
    let semifinalists=[];
    console.log();
    console.log("Četvrtfinale:");
    console.log();
    for (let i = 0; i < winers.length-1; i++) {
      let r= match("El", winers[i], winers[i+1]);
      semifinalists.push(r);
      i++;
    
    }

    console.log();
    console.log("Polufinale:");
    console.log();
    
    let f1=match("El", semifinalists[0], semifinalists[1]);
    let f2=match("El", semifinalists[2], semifinalists[3]);

    console.log();
    console.log("Finale:");
    console.log();

    let f3=match("El", f1,f2);
    console.log();
    console.log(`!!! Pobednik: ${f3.name} !!!`);
};

main();
