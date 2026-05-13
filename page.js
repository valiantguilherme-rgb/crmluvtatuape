
export default function Home() {
  return (
    <main style={{padding:'30px'}}>
      <h1 style={{fontSize:'32px', fontWeight:'bold'}}>
        CRM Imobiliário LUV Tatuapé
      </h1>

      <div style={{display:'flex', gap:'20px', marginTop:'20px'}}>
        <div style={{background:'#fff', padding:'20px', borderRadius:'16px'}}>
          <h2>Agendamentos</h2>
          <p style={{fontSize:'28px'}}>18</p>
        </div>

        <div style={{background:'#fff', padding:'20px', borderRadius:'16px'}}>
          <h2>Visitas</h2>
          <p style={{fontSize:'28px'}}>11</p>
        </div>

        <div style={{background:'#fff', padding:'20px', borderRadius:'16px'}}>
          <h2>Follow-ups</h2>
          <p style={{fontSize:'28px'}}>26</p>
        </div>
      </div>

      <div style={{marginTop:'30px', background:'#fff', padding:'20px', borderRadius:'16px'}}>
        <h2>Últimos Agendamentos</h2>

        <div style={{marginTop:'15px', padding:'12px', background:'#f9fafb', borderRadius:'12px'}}>
          <strong>Rosemeire</strong>
          <p>Corretor: Guilherme</p>
          <p>Status: Confirmado</p>
        </div>

        <div style={{marginTop:'15px', padding:'12px', background:'#f9fafb', borderRadius:'12px'}}>
          <strong>Erica</strong>
          <p>Corretor: Regiane</p>
          <p>Status: Visitou</p>
        </div>
      </div>
    </main>
  )
}
