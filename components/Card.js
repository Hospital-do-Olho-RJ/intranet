export default function Card({ item, onClick }) {
  // Forçando a atualização do Git
  return (
    <div className="col-md-4">
      <a href={item.href} onClick={onClick} className="text-decoration-none">
        <div className="card text-center p-4">
          <i className={`fas ${item.icon} icon mb-3`}></i>
          <h5 className="card-title">{item.title}</h5>
          <p>{item.text}</p>
        </div>
      </a>
    </div>
  );
}
