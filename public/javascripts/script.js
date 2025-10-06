const form = document.getElementById('pedidoForm');
const msg = document.getElementById('mensagem');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const pedido = {
    nome: document.getElementById('nome').value,
    item: document.getElementById('item').value
  };

  try {
    const res = await fetch('/api/pedidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido)
    });

    if (res.ok) {
      msg.textContent = '✅ Pedido enviado com sucesso!';
      form.reset();
    } else {
      msg.textContent = '❌ Erro ao enviar o pedido.';
    }
  } catch (err) {
    msg.textContent = '⚠️ Falha na conexão com o servidor.';
  }
});