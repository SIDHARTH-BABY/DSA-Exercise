var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  let dummy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    console.log(curr, "and", curr.next);
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  console.log(curr);
  console.log(dummy, "dummy");
  return dummy.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
