// fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
//     .then((res) => res.json())
//     .then((data) => console.log(data.data));



const allData = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((res) => res.json())
        .then((data) => showCard(data.data))
    // .then((data) => console.log(data.data))

    const stor = document.getElementById("AllCard");


    function showCard(data) {
        data.forEach(element => {
            let textColor = "1F2937";
            let bgColor = "#EEEFF2"
            if (element.priority == "high") {
                textColor = "#EF4444"
                bgColor = "#FEECEC"
            }
            else if (element.priority == "medium") {
                textColor = "#F59E0B"
                bgColor = "#FFF6D1";
            }

            let topColor = "#00A96E";
            let statusImg = "assets/Open-Status.png";
            if (element.status == "closed") {
                statusImg = "assets/Closed- Status .png";
                topColor = "#A855F7";
            }




            const div = document.createElement("div");
            div.innerHTML = `
                            <div class="p-5 card bg-base-100 shadow-lg  border-t-8 border-[${topColor}]">
                    <div class=" flex justify-between">
                        <img class="w-8 h-8" src="${statusImg}" alt="">
                        <h1 class="bg-[${bgColor}] text-[${textColor}] px-3 py-1 rounded-2xl">${element.priority.toUpperCase()}</h1>
                    </div>
                    <div class="mt-2">
                        <div class=" lg:h-14 ">
                            <h1 class="text-[16px] font-semibold">${element.title}</h1>
                        </div>
                        <div class=" h-32 lg:h-24">
                            <p class="text-[14px] text-[#64748B]">${element.description}</p>
                        </div>
                        <div class="mt-2 h-28 gap-2">
                           
                            <div class="flex flex-wrap">
                                ${element.labels.map(label=>
                                   `<h1 class="bg-[#FECACA] border border-[#EF4444] text-[#EF4444] rounded-2xl px-2 py-1 m-1">${label}</h1>`
                                ).join(" ")}
                            </div>
                            <button
                                class="bg-[#FFF8DB] text-[#D97706] w-48 h-8 border border-[#FDE68A]  py-1 rounded-2xl flex items-center justify-center gap-1">
                                <img class="w-4 h-4" src="assets/Lifebuoy.png" alt=""> HELP WANTED</button>
                        </div>
                        <hr class="text-slate-300 my-5">
                    </div>
                    <h1 class="text-[14px] text-[#64748B]">#${element.assignee}</h1>
                    <h2 class="text-[14px] text-[#64748B]">${element.createdAt}</h2>
                </div>



        `
            stor.appendChild(div);

        });

        const total = stor.children.length;
        totalCount(total);
    }
}


function totalCount(data) {
    const total = document.getElementById("total_issus");
    total.innerText = `${data} Issus`;
}

allData()
