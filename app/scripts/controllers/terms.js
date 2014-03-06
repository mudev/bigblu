'use strict';

app.controller('TermsCtrl', function($scope){
  $scope.toggleDefs = function () {
    scope.isContentVisible = !scope.isContentVisible;
  };
  $scope.defs = [
      {deftitle:'Definitions', content:'The hired items are referred to as the “Equipment”\nThe “Supplier” shall be Big Blue Audio.\nThe “Client” shall be the parties entering the agreement of hire of equipment.\n'},
      {deftitle:'Delivery & Collection', content:'The Supplier or an authorised employee of the company will deliver, operate & collect equipment unless arrangements have been previously agreed between the Client and the Supplier.\nThe Supplier or an authorised employee of the company must have free access to the Equipment at all times.The Supplier or an authorised employee of the company must have adequate parking facilities in order to load in & load out equipment.\nThe Client must sign for receipt of goods, to obtain any rights as to any following complaint. Goods received, which appear to be damaged, must be acknowledged by the signatory.Any non-delivery must be advised by the Client to the Supplier within 24 hours for the Supplier to investigate.\n'},
      {deftitle:'Booking Fee', content:'The Client must leave a booking fee with the supplier in advance of the hire period. The booking fee shall be at least 25% of the hire total. The Supplier will not accept responsibility for unsolicited hire booking and confirmation will not be given until a booking fee has been received. Refunds on the booking fee cannot be made under any circumstances if the hire is cancelled.\n All hires need paying in full to secure the booking\n'},
      {deftitle:'Proof of ID', content:'Supplier requires that ID must be produced for all new customers. Three forms of ID are required with at least one form being photo identification.\nA passport, a driving licence accompanied by 3 recent utility bills. The Client must be over 18 to make a booking.\n'},
      {deftitle:'Payment', content:'Payment of the hire charge, the booking deposit (if applicable) and the equipment deposited may be via bank transfer, cheque, PayPal or debit/credit cards (debit/credit card payment is unavailable until the start of November 2009).\n'},
      {deftitle:'Client Responsibilities', content:'Where the Client collects, operates and returns the equipment, the Client’s responsibilities will include that:\ra) All equipment is insured as in the event of loss or damage the Client is personally liable for the cost of replacement.\rb) The equipment is only used by competent personnel and is only used for its intended purpose.\rc) The equipment is connected correctly and is protected by suitable fuses and proper earthing.\nTransit of equipment-If the equipment is to be transported by any person other than the Supplier then the equipment must be suitably protected in transit with adequate packing and handling precautions remaining the responsibility of the Client.Equipment may not be moved outside of the United Kingdom without prior consent of the Supplier.\n'},
      {deftitle:'Damages', content:'The Client must satisfy himself that the equipment is in good order before accepting delivery.\nThe Client must declare to the supplier any damages that occur during the hire period.\nThe Client must not repair or attempt to repair damaged or faulty equipment.\nWhere equipment has failed due to an inherent fault or wear and tear the Client may submit a written claim to the Supplier at the time of return or collection of equipment.\nIf the claim is accepted by the Supplier a refund of part or all of the hire charge relating to that piece of equipment will be offered in the form of a credit note.The acceptance of any claim and the offer of a refund is not an admission of liability but simply a gesture of goodwill from the Supplier to the Client.\nThe Client shall be responsible for all expenses involved arising from any breakdown and losses of damages incurred by the Supplier due to the Client’s negligence, misdirection or misuse of the Equipment, and for payment of the hire charges during the period the Equipment is idle due to such a breakdown.\n'},
      {deftitle:'Change of Conditions', content:'The Supplier reserves the right to alter or amend the terms & conditions of equipment hire without warning or prior notification\n'}
    ];
  $scope.PageClass = 'terms-class';
});
