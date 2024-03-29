const assert = require('@barchart/common-js/lang/assert'),
	Enum = require('@barchart/common-js/lang/Enum');

module.exports = (() => {
	'use strict';

	/**
	 * An enumeration item that describes a type of transaction.
	 *
	 * @public
	 * @extends {Enum}
	 * @param {String} code
	 * @param {String} description
	 * @param {String} display
	 * @param {Number} sequence
	 * @param {Boolean} purchase
	 * @param {Boolean} sale
	 * @param {Boolean} income
	 * @param {Boolean} opening
	 * @param {Boolean} closing
	 * @param {Boolean} fee
	 * @param {Boolean} corporateAction
	 * @param {Boolean} initial
	 * @param {Boolean} terminal
	 * @param {Boolean} significant
	 * @param {Boolean} chaining
	 * @param {Boolean} chained
	 * @param {Boolean} transfer
 	 */
	class TransactionType extends Enum {
		constructor(code, description, display, sequence, purchase, sale, income, opening, closing, fee, corporateAction, initial, terminal, significant, chaining, chained, transfer) {
			super(code, description);

			assert.argumentIsRequired(display, 'display', String);
			assert.argumentIsRequired(sequence, 'sequence', Number);
			assert.argumentIsRequired(purchase, 'purchase', Boolean);
			assert.argumentIsRequired(sale, 'sale', Boolean);
			assert.argumentIsRequired(income, 'income', Boolean);
			assert.argumentIsRequired(opening, 'opening', Boolean);
			assert.argumentIsRequired(closing, 'closing', Boolean);
			assert.argumentIsRequired(fee, 'fee', Boolean);
			assert.argumentIsRequired(corporateAction, 'corporateAction', Boolean);
			assert.argumentIsRequired(initial, 'initial', Boolean);
			assert.argumentIsRequired(terminal, 'terminal', Boolean);
			assert.argumentIsRequired(significant, 'significant', Boolean);
			assert.argumentIsRequired(chaining, 'chaining', Boolean);
			assert.argumentIsRequired(chained, 'chained', Boolean);
			assert.argumentIsRequired(transfer, 'transfer', Boolean);

			this._display = display;
			this._sequence = sequence;
			this._purchase = purchase;
			this._sale = sale;
			this._income = income;
			this._opening = opening;
			this._closing = closing;
			this._fee = fee;
			this._corporateAction = corporateAction;
			this._initial = initial;
			this._terminal = terminal;
			this._significant = significant;
			this._chaining = chaining;
			this._chained = chained;
			this._transfer = transfer;
		}

		/**
		 * A human-readable description of the transaction type.
		 *
		 * @public
		 * @returns {String}
		 */
		get display() {
			return this._display;
		}

		/**
		 * Specifies ordering when multiple transactions occur on the same day, for
		 * the same position.
		 *
		 * @public
		 * @returns {Number}
		 */
		get sequence() {
			return this._sequence;
		}

		/**
		 * Indicates if the transaction was a trade.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get trade() {
			return this._purchase || this._sale;
		}

		/**
		 * Indicates if the transaction was a purchase.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get purchase() {
			return this._purchase;
		}

		/**
		 * Indicates if the transaction was a sale.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get sale() {
			return this._sale;
		}

		/**
		 * Indicates if the transaction was an income payment.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get income() {
			return this._income;
		}

		/**
		 * Indicates if the transaction opens the position (i.e. increases its
		 * magnitude).
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get opening() {
			return this._opening;
		}

		/**
		 * Indicates if the transaction closes the position (i.e. decreases its
		 * magnitude).
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get closing() {
			return this._closing;
		}

		/**
		 * Indicates if the transaction is a chart that neither opens nor
		 * closes the position.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get fee() {
			return this._fee;
		}

		/**
		 * Indicates if the transaction is a corporate action.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get corporateAction() {
			return this._corporateAction;
		}

		/**
		 * Indicates if the transaction can be the first transaction for a position.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get initial() {
			return this._initial;
		}

		/**
		 * Indicates if the transaction must be the last
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get terminal() {
			return this._terminal;
		}

		/**
		 * Significant transactions cannot be discarded during transaction re-write.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get significant() {
			return this._significant;
		}

		/**
		 * Chain transactions cause another position to be created.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get chaining() {
			return this._chaining;
		}

		/**
		 * Chained transactions are created from another position.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get chained() {
			return this._chained;
		}

		/**
		 * Indicates if the transaction should cause gains and losses to be
		 * transferred from the original (chaining) position.
		 *
		 * @public
		 * @returns {Boolean}
		 */
		get transfer() {
			return this._transfer;
		}

		/**
		 * A purchase.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get BUY() {
			return buy;
		}

		/**
		 * A sale.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get SELL() {
			return sell;
		}

		/**
		 * A purchase (in a short position).
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get BUY_SHORT() {
			return buyShort;
		}

		/**
		 * A short sale.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get SELL_SHORT() {
			return sellShort;
		}

		/**
		 * A cash dividend.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DIVIDEND() {
			return dividend;
		}

		/**
		 * A cash dividend, reinvested.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DIVIDEND_REINVEST() {
			return dividendReinvest;
		}

		/**
		 * A stock dividend.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DIVIDEND_STOCK() {
			return dividendStock;
		}

		/**
		 * A mutual fund distribution in cash.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DISTRIBUTION_CASH() {
			return distributionCash;
		}

		/**
		 * A mutual fund distribution in units.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DISTRIBUTION_FUND() {
			return distributionFund;
		}

		/**
		 * A mutual fund distribution in cash, reinvested.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DISTRIBUTION_REINVEST() {
			return distributionReinvest;
		}

		/**
		 * A split.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get SPLIT() {
			return split;
		}

		/**
		 * A fee.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get FEE() {
			return fee;
		}

		/**
		 * A mutual fund fee, which is paid in units.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get FEE_UNITS() {
			return feeUnits;
		}

		/**
		 * A deposit.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DEPOSIT() {
			return deposit;
		}

		/**
		 * A withdrawal.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get WITHDRAWAL() {
			return withdrawal;
		}

		/**
		 * A system-generated withdrawal, arising from another transaction.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DEBIT() {
			return debit;
		}

		/**
		 * A system-generated transaction, indicating the security has stopped active trading.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get DELIST() {
			return delist;
		}

		/**
		 * A system-generated deposit, arising from another transaction.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get CREDIT() {
			return credit;
		}

		/**
		 * A valuation event.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get VALUATION() {
			return valuation;
		}

		/**
		 * Other Income.
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get INCOME() {
			return income;
		}

		/**
		 * A closing transaction as a result of a merger (for the acquired company).
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get MERGER_CLOSE() {
			return mergerClose;
		}

		/**
		 * A opening transaction as a result of a merger (for the acquiring company).
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get MERGER_OPEN() {
			return mergerOpen;
		}

		/**
		 * A spin-off (transaction applies to the original company).
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get SPINOFF() {
			return spinoff;
		}

		/**
		 * A spin-off (transaction opens a position in a new company).
		 *
		 * @public
		 * @static
		 * @returns {TransactionType}
		 */
		static get SPINOFF_OPEN() {
			return spinoffOpen;
		}

		/**
		 * @public
		 * @static
		 * @param {String} code
		 * @returns {TransactionType|null}
		 */
		static parse(code) {
			return Enum.fromCode(TransactionType, code);
		}

		toString() {
			return `[TransactionType (code=${this.code})]`;
		}
	}

	const buy = new TransactionType('B', 'Buy', 'Buy', 0, true, false, false, true, false, false, false, true, false, true, false, false, false);
	const sell = new TransactionType('S', 'Sell', 'Sell', 0, false, true, false, false, true, false, false, false, false, true, false, false, false);
	const buyShort = new TransactionType('BS', 'Buy To Cover', 'Buy To Cover', 0, true, false, false, false, true, false, false, false, false, true, false, false, false);
	const sellShort = new TransactionType('SS', 'Sell Short', 'Sell Short', 0, false, true, false, true, false, false, false, true, false, true, false, false, false);
	const dividend = new TransactionType('DV', 'Dividend', 'Dividend', 1, false, false, true, false, false, false, true, false, false, false, false, false, false);
	const dividendReinvest = new TransactionType('DX', 'Dividend (Reinvested)', 'Dividend Reinvest', 1, false, false, false, true, false, false, true, false, false, false, false, false, false);
	const dividendStock = new TransactionType('DS', 'Dividend (Stock)', 'Dividend Stock', 1, false, false, false, true, false, false, true, false, false, false, false, false, false);
	const split = new TransactionType('SP', 'Split', 'Split', 1, false, false, false, true, false, false, true, false, false, false, false, false, false);
	const fee = new TransactionType('F', 'Fee', 'Fee', 0, false, false, false, false, false, true, false, false, false, false, false, false, false);
	const feeUnits = new TransactionType('FU', 'Fee Units', 'Fee', 0, false, false, false, false, true, false, false, false, false, false, false, false, false);
	const delist = new TransactionType('DL', 'Delist', 'Delist', 1, false, false, false, false, false, false, true, false, true, false, false, false, false);

	const mergerClose = new TransactionType('MC', 'Merger Close', 'Merger Close', 1, false, false, false, false, true, false, true, false, true, false, true, false, false);
	const mergerOpen = new TransactionType('MO', 'Merger Open', 'Merger Open', 1, false, false, false, true, false, false, true, true, false, true, false, true, true);

	const spinoff = new TransactionType('SPF', 'Spinoff', 'Spinoff', 1, false, false, false, false, false, false, true, false, false, false, true, false, false);
	const spinoffOpen = new TransactionType('SPFO', 'Spinoff Open', 'Spinoff Open', 1, false, false, false, true, false, false, true, true, false, true, false, true, true);

	const distributionCash = new TransactionType('DC', 'Distribution (Cash)', 'Cash Distribution', 1, false, false, true, false, false, false, true, false, false, false, false, false, false);
	const distributionReinvest = new TransactionType('DY', 'Distribution (Reinvested)', 'Distribution Reinvest', 1, false, false, false, true, false, false, true, false, false, false, false, false, false);
	const distributionFund = new TransactionType('DF', 'Distribution (Units)', 'Unit Distribution', 1, false, false, false, true, false, false, true, false, false, false, false, false, false);

	const deposit = new TransactionType('D', 'Deposit', 'Deposit', 0, false, false, false, false, false, false, false, true, false, true, false, false, false);
	const withdrawal = new TransactionType('W', 'Withdrawal', 'Withdrawal', 0, false, false, false, false, false, false, false, true, false, true, false, false, false);
	const debit = new TransactionType('DR', 'Debit', 'Debit', 0, false, false, false, false, false, false, false, true, false, true, false, false, false);
	const credit = new TransactionType('CR', 'Credit', 'Credit', 0, false, false, false, false, false, false, false, true, false, true, false, false, false);

	const valuation = new TransactionType('V', 'Valuation', 'Valuation', 0, false, false, false, false, false, false, false, false, false, false, false, false, false);
	const income = new TransactionType('I', 'Income', 'Income', 0, false, false, true, false, false, false, false, false, false, false, false, false, false);

	return TransactionType;
})();
