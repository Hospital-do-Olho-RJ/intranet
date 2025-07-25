export default function RamalModal({ visible, onClose, ramais, searchQuery, setSearchQuery }) {
  const filteredRamais = ramais.filter(item =>
    item.local.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.unidade.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.ramal.includes(searchQuery)
  );

  return (
    <div id="ramalCard" className={visible ? 'active' : ''}>
      <span className="close-btn" onClick={onClose}>&times;</span>
      <h2 className="text-center mb-4">Ramais Internos</h2>
      <input 
        type="text" 
        id="searchInput" 
        className="form-control mb-3" 
        placeholder="Buscar por local, unidade ou ramal..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Local</th>
              <th>Unidade</th>
              <th>Ramal</th>
            </tr>
          </thead>
          <tbody>
            {filteredRamais.map((item, index) => (
              <tr key={index}>
                <td>{item.local}</td>
                <td>{item.unidade}</td>
                <td>{item.ramal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
