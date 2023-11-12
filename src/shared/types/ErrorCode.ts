export enum ErrorCode {
  BAD_REQUEST = "BAD_REQUEST",
  INTERNAL = "INTERNAL_SERVER_ERROR",
  /* CreateSentence */
  SENTENCE_IS_REQUIRED = "SENTENCE_IS_REQUIRED",
  SENTENCE_LANGUAGE_IS_INVALID_ENUM = "SENTENCE_LANGUAGE_IS_INVALID_ENUM",
  /* Chat Service */
  CHAT_SERVICE_NO_MESSAGE_RETURN = "CHAT_SERVICE_NO_MESSAGE_RETURN",
}
