function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.querySelector("#inputs textarea")
   const restourantNameRef = document.querySelector("#bestRestaurant p");
   const workerListRef = document.querySelector("#workers p");

   function onClick() {
      let info = JSON.parse(textArea.value);
      let res = {};
      for (let restaurantInfo of info) {
         let [restaurantName, workersStr] = restaurantInfo.split(" - ");
         let workers = workersStr.split(", ");
         if (!res.hasOwnProperty[restaurantName]) {
            res[restaurantName] = {
               avgSalary: calcAvgS(workers),
               bestSalary: calcBsetS(workers),
               workers: workers
            }
         } else {
            res[restaurantName].workers = concatWorkers(res[restaurantName].workers, workers)
            res[restaurantName].avgSalary = calcAvgS(res[restaurantName].workers);
            res[restaurantName].bestSalary = calcBsetS(res[restaurantName].workers);
         }
      }

      let sortRestourant = Object.entries(res).sort((a,b) => b[1].avgSalary - a[1].avgSalary);
      let bestRest = sortRestourant[0];

      let workerAsText = "";
      bestRest[1].workers.sort(sortWorkers).forEach(e => {
         let [name, salary] = e.split(" ");
         workerAsText +=`Name: ${name} With Salary: ${salary} `;
         return;
      });

      restourantNameRef.textContent = `Name: ${bestRest[0]} Average Salary: ${bestRest[1].avgSalary.toFixed(2)} Best Salary: ${bestRest[1].bestSalary.toFixed(2)}`;
      workerListRef.textContent = workerAsText;      
   }

   function concatWorkers(oldWorkers, newWorkers) {

      return oldWorkers.concat(newWorkers);
   }


   function sortWorkers(workerA, workerB){
      let [nameA, salaryA] = workerA.split(" ");
      let [nameB, salaryB] = workerB.split(" ");
      salaryA = Number(salaryA);
      salaryB = Number(salaryB);
      return salaryB - salaryA;
   }
   
   function calcBsetS(workers) {
      let bestSalary = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(" ");
         salary = Number(salary);
         if (salary > bestSalary) {
            bestSalary = salary;
            return;
         }
      })
      return bestSalary;
   }

   function calcAvgS(workers) {
      let sum = 0;
      workers.forEach(worker => {
         let [name, salary] = worker.split(" ");
         return sum += Number(salary);
      });
      return sum / workers.length;
   }
}