import PropTypes from 'prop-types';

export function HelloWorld() {
  const user = {
    name: "Jorge",
    age: 25,
    country: "Colombia",
    bool: true,
  };
  return (<>
  <h1>{user.name}</h1>
  </>
  );
}

export function UserCard(props){

  //Error lanzado personalizado
  console.log(props.test)
  if(props.test === undefined){
  console.error("No se ha definido el nombre del usuario");}

  return (<>
  <h1>User {props.test}</h1>
  </>);
}


//Librería que genera tipado de datos
UserCard.propTypes = {
  test: PropTypes.string,
};

UserCard.defaultProps = {
  test: "No definido",
};
