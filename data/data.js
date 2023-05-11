let body = document.querySelectorAll("body")

body.forEach((item) => {
  let sectionObserver = new IntersectionObserver((entries) => {
    let [entry] = entries;

    // This is a "ternary" operator——a condensed if/else.
    entry.isIntersecting ? item.classList.remove("hidden") : item.classList.add("hidden");
  }, {
    root: document, // This is only needed in the example iframe!
    rootMargin: '0% 0% 0% 0%', // CSS-ish: top/right/bottom/left.
  });

  sectionObserver.observe(item); // Watch each one!
});

let header = document.querySelectorAll("header"); // All.

// Loop through the list, doing this `forEach` one.
header.forEach((block) => {
  let sectionObserver = new IntersectionObserver((entries) => {
    let [entry] = entries;

    // This is a "ternary" operator——a condensed if/else.
    entry.isIntersecting ? block.classList.remove("rotate") : block.classList.add("rotate");
  }, {
    root: document, // This is only needed in the example iframe!
    rootMargin: '-0% 0% -33% 0%', // CSS-ish: top/right/bottom/left.
  });

  sectionObserver.observe(block); // Watch each one!
});

function renderItems(collection) {
  console.log(collection);

  collection.ps116.forEach((element) => {
    console.log("test1", element.year, element.enrollment);
    let kTo5 = element.gradeK + element.grade1 + element.grade2 + element.grade3 + element.grade4 + element.grade5;
    console.log("kTo5", kTo5);

    let demographicData = `

    <div class="dataset-column">
      <div class="vertical-line"></div>

      <div class="icon-container">
        <h2>${element.year}</h2>
        <img src="${element.img}">
      </div>

     <div class="dataset-sbp dataset">
              <span class="dataset-name">Enrollment</span>

        <div class="data-sbp" style="width:${(element.enrollment / 539) * 100}%;">
          <P>${(element.enrollment)}</P>
        </div>
      </div>

      <div class="dataset-gender dataset" style="
      grid-template-columns: ${element.percentMale} ${element.percentFemale};
      ;">
        <span class="dataset-name">Gender</span>
        <div class="data-male"><p>Male ${element.percentMale}</p></div>
        <div class="data-female"><p>Female ${element.percentFemale}</p></div>
      </div>

      <div class="dataset-poverty dataset">
        <span class="dataset-name" style="bottom: 2rem; top: auto;">Poverty</span>
        <div class="data-poverty" style="width:${element.percentPoverty};"><p>${element.percentPoverty}</p></div>
      </div>

      <div class="dataset-grades dataset" style="
      grid-template-rows: 
      ${(element.gradeK / kTo5 * 100)}% 
      ${(element.grade1 / kTo5 * 100)}%
      ${(element.grade2 / kTo5 * 100)}%
      ${(element.grade3 / kTo5 * 100)}%
      ${(element.grade4 / kTo5 * 100)}%
      ${(element.grade5 / kTo5 * 100)}%
      ;">
        <span class="dataset-name" style="right: -2rem; left:auto;">Grade Size</span>
        <div class="data-male"><p>k - ${element.gradeK}</p></div>
        <div class="data-male"><p>1 - ${element.grade1}</p></div>
        <div class="data-male"><p>2 - ${element.grade2}</p></div>
        <div class="data-male"><p>2 - ${element.grade3}</p></div>
        <div class="data-male"><p>4 - ${element.grade4}</p></div>
        <div class="data-male"><p>5 - ${element.grade5}</p></div>
      </div>
    
    </div>`;

    let collectionContainer = document.getElementById("collectionContainer");
    collectionContainer.insertAdjacentHTML("beforeend", demographicData);
    let showAllBtn = document.getElementById("showAllBtn")
    showAllBtn.addEventListener("click", function (event) {
      let data = document.querySelectorAll(".dataset").forEach((items) => {
        console.log(items.classList)
        items.classList.toggle("show")
      })
    })



  });
}
// dataset.forEach((items) => {
//   console.log("dataset", items)
// })




{/* <div class="dataset-race" style="width:${(element.enrollment / 539) * 100}%;">
  <div class="data-white" style="width:${(element.percentWhite)};"></div>
  <div class="data-black" style="width:${(element.percentBlack)};"></div>
  <div class="data-hispanic" style="width:${(element.percentHispanic)};"></div>
  <div class="data-asian" style="width:${(element.percentAsian)};"></div>
</div> */}


fetch("PS116_Demographic_Data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (collection) {
    // And passes the data to the function, above!
    renderItems(collection);
  });
