export class Calendar {
  constructor() {
    this.currentDate = new Date();
    this.currentDate.setDate(1);
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.init();
  }

  displayCalendar() {
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getUTCDay();
    const lastDayOfPrevMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const numPrevDays = firstDayOfMonth;
    const numNextDays = 42 - (numPrevDays + lastDayOfMonth);
    const container = document.querySelector(".days");

    container.innerHTML = "";

    for (let i = numPrevDays - 1; i >= 0; i--) {
      this.createDayElement(container, "prev-month-day", lastDayOfPrevMonth - (numPrevDays - 1) + i);
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const day = this.createDayElement(container, "curr-month-day", i);

      const today = new Date();
      if (this.currentMonth === today.getMonth() && this.currentYear === today.getFullYear() && i === today.getDate()) {
        day.classList.add("today");
      }
    }

    for (let i = 1; i <= numNextDays; i++) {
      this.createDayElement(container, "next-month-day", i);
    }

    const monthYear = document.querySelector(".month-year");
    monthYear.textContent = `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
  }

  createDayElement(container, className, dayNumber) {
    const day = document.createElement("div");
    day.classList.add("day", className);
    day.textContent = dayNumber;
    container.appendChild(day);
    return day;
  }

  init() {
    this.displayCalendar();

    const prevMonthBtn = document.querySelector(".prev-month");
    prevMonthBtn.addEventListener("click", () => {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      this.displayCalendar();
    });

    const nextMonthBtn = document.querySelector(".next-month");
    nextMonthBtn.addEventListener("click", () => {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
      this.displayCalendar();
    });

    const currentDateButton = document.querySelector(".current-date-button");
    currentDateButton.addEventListener("click", () => {
      this.jumpToCurrentDate();
    });

    const dateEntryButton = document.querySelector(".date-entry-button");
    dateEntryButton.addEventListener("click", () => {
      this.toggleDateEntryField();
    });

    const jumpToDateButton = document.getElementById("jumpToDateButton");
    jumpToDateButton.addEventListener("click", () => {
      this.jumpToDate();
    });
  }

  jumpToCurrentDate() {
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();
    this.displayCalendar();
  }

  toggleDateEntryField() {
    const dateEntryContainer = document.querySelector(".date-entry-container");
    dateEntryContainer.style.display = dateEntryContainer.style.display === "none" ? "flex" : "none";
  }

  jumpToDate() {
    const dateInput = document.getElementById("dateInput");
    const enteredDate = dateInput.value;
    const dateParts = enteredDate.split("/");

    if (dateParts.length === 3) {
      const day = parseInt(dateParts[0]);
      const month = parseInt(dateParts[1]) - 1;
      const year = parseInt(dateParts[2]);

      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        this.currentMonth = month;
        this.currentYear = year;
        this.displayCalendar();
      } else {
        alert("Invalid date format. Please enter a valid date (dd/mm/yyyy).");
      }
    } else {
      alert("Invalid date format. Please enter a valid date (dd/mm/yyyy).");
    }
  }
}
