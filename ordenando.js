// swap
const swap = (vetor, posicao1, posicao2) => {
  [vetor[posicao1], vetor[posicao2]] = [vetor[posicao2], vetor[posicao1]]
}

// shuffle
const shuffle = (vetor, quantidade_trocas) => {
  for (let i = 0; i < quantidade_trocas; i++) {
    const posicao1 = Math.floor(Math.random() * vetor.length)
    const posicao2 = Math.floor(Math.random() * vetor.length)
    swap(vetor, posicao1, posicao2)
  }
}

// bubble_sort
const bubble_sort = (vetor) => {
  const n = vetor.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1)
      }
    }
  }
  return vetor
}

// selection_sort
const selection_sort = (vetor) => {
  const n = vetor.length
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i
  for (let j = i + 1; j < n; j++) {
    if (vetor[vetor[j] < vetor[minIndex]]) {
      minIndex = j
      }
    }
    swap(vetor, i, minIndex)
  }
  return vetor
}

// quick_sort
const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {
  if (inicio < fim) {
    const indice_pivot = particionamento(vetor, inicio, fim)
    quick_sort(vetor, inicio, indice_pivot - 1)
    quick_sort(vetor, indice_pivot + 1, fim)
  }
  return vetor
}

// particionamento
const particionamento = (vetor, inicio = 0, fim = vetor.length) => {
  const pivot = vetor[fim]
  let i = inicio - 1

  for (let j = inicio; j < fim; j++) {
    if (vetor[j] <= pivot) {
      i++
      swap(vetor, i, j)
    }
  }
  swap(vetor, i + 1, fim)
  return i + 1
}