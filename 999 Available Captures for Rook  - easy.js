const findRook = (board) => {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 'R') {
				return {i, j};
			}
		}
	}
}

const checkRight = (board, i, j) => {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (j === board[i].length - 1) {
			break;
		}

		j++;
	}

	return counter;
}

const checkLeft = (board, i, j) => {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (j === 0) {
			break;
		}

		j--;
	}

	return counter;
}

const checkTop = (board, i, j) => {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (i === 0) {
			break;
		}

		i--;
	}

	return counter;
}

const checkDown = (board, i, j) => {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (i === board.length - 1) {
			break;
		}

		i++;
	}

	return counter;
}

const numRookCaptures = function(board) {
	const rook = findRook(board);
	let counter = 0;

	counter += checkRight(board, rook.i, rook.j);
	counter += checkLeft(board, rook.i, rook.j);
	counter += checkTop(board, rook.i, rook.j);
	counter += checkDown(board, rook.i, rook.j);

	return counter;
};
