export default function Product({ product }) {
  return(
    <li>
      <img
        src={product?.image}
        alt={product?.title}      
      />
    </li>
  );
};
