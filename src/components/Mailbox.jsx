import PropTypes from "prop-types";

const alertStyles = {
  color: "lightgreen",
};

export const Mailbox = ({ username = "Name", unreadMessages = 0 }) => {
  return (
    <>
      <p>Hello {username}</p>
      <p style={alertStyles}>
        {unreadMessages.length > 0
          ? `You have ${unreadMessages.length} unread messages`
          : "No unread messages"}
      </p>
    </>
  );
};

Mailbox.propTypes = {
  username: PropTypes.string,
  unreadMessages: PropTypes.number,
};
