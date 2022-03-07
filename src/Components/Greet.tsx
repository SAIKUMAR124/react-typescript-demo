type GreetProps = {
  name: string;
  messageCount: number;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2>
    </div>
  );
};

export default Greet;
