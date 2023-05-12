//   Live Toast

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
      const toast = new bootstrap.Toast(toastLiveExample)

      toast.show()
    })
  }

//   Quantity

function minus() {
    var qty = document.getElementById('qty').innerHTML
    qty = Number(qty)
    if (qty == 0) {
      return false;
    } else {
      qty -= 1
      document.getElementById('qty').innerHTML = qty
      return false
    }
}

function plus() {
    var qty = document.getElementById('qty').innerHTML
    qty = Number(qty)
    qty += 1
    document.getElementById('qty').innerHTML = qty
    return false
}