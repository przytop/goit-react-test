export const Mailbox = ({ username = "Name", unreadMessages = 0 }) => {
  return (
    <>
      <p>Hello {username}</p>
      <p>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
};
