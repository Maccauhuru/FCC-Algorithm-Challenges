function booWho(bool) {
    //use a switch statement to check for primitive booleans
  switch (bool) {
    case true:
    case false:
      return true;
    default:
      return false;
  }
}

booWho(null);
