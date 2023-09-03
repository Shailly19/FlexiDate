import { Calendar, createDayElement } from './modules/calendar';
import { isLeapYear } from './modules/date-utils';
import './modules/dark-mode'; 

const calendar = new Calendar();

const prevMonthBtn = document.querySelector(".prev-month");
prevMonthBtn.addEventListener("click", () => {
  calendar.currentMonth--;
  if (calendar.currentMonth < 0) {
    calendar.currentMonth = 11;
    calendar.currentYear--;
  }
  calendar.displayCalendar();
});

const nextMonthBtn = document.querySelector(".next-month");
nextMonthBtn.addEventListener("click", () => {
  calendar.currentMonth++;
  if (calendar.currentMonth > 11) {
    calendar.currentMonth = 0;
    calendar.currentYear++;
  }
  calendar.displayCalendar();
});

const currentDateButton = document.querySelector(".current-date-button");
currentDateButton.addEventListener("click", () => {
  calendar.jumpToCurrentDate();
});

const dateEntryButton = document.querySelector(".date-entry-button");
dateEntryButton.addEventListener("click", () => {
  calendar.toggleDateEntryField();
});

const jumpToDateButton = document.getElementById("jumpToDateButton");
jumpToDateButton.addEventListener("click", () => {
  calendar.jumpToDate();
});

