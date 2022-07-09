const drawArena = () => {
  const lines = getSectorLines();

  getArenaArea.innerHTML = createSectors(1, 3)
    .map(
      num => `
    <div
    class="sector"
    data-sector-number="${num}"
    >${lines}</div>
  `,
    )
    .join('');
};

const getSectorLines = () => {
  const seats = createSeats();

  return createSectors(1, 10)
    .map(
      num => `
    <div
    class="sector__line"
    data-line-number="${num}"
    >${seats}</div>
  `,
    )
    .join('');
};

const createSectors = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const getArenaArea = document.querySelector('.arena');

const createSeats = () =>
  createSectors(1, 10)
    .map(
      num => `
    <div
    class="sector__seat"
    data-seat-number="${num}"></div>`,
    )
    .join('');

const selectSeat = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeat = document.querySelector('.board__selected-seat');
  selectedSeat.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

getArenaArea.addEventListener('click', selectSeat);

drawArena();
