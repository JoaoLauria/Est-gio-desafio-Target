function fibonacci() {
    let num = parseInt(document.getElementById("numeroInput").value);
    let ant = 0;
    let atual = 1;
    
    
    if (num === 0 || num === 1) {
        document.getElementById("resultado").innerText = `${num} pertence à sequência de Fibonacci.`;
        return;
    }
    
    while (atual <= num) {
        
        if (atual === num) {
            document.getElementById("resultado").innerText = `${num} pertence à sequência de Fibonacci.`;
            return;
        }
        
        
        let next = ant + atual;
        ant = atual;
        atual = next;
    }
    
    
    document.getElementById("resultado").innerText = `${num} não pertence à sequência de Fibonacci.`;
}