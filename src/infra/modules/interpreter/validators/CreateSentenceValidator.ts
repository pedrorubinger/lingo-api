import { IsEnum, IsString } from "class-validator"

import { ValidatableInput } from "@core"
import { ErrorCode, TranslatorLanguage } from "@shared/types"
import { ICreateSentenceValidator } from "@application/modules/interpreter/validators"

export class CreateSentenceValidator
  extends ValidatableInput<ICreateSentenceValidator>
  implements ICreateSentenceValidator
{
  @IsString({ message: ErrorCode.SENTENCE_IS_REQUIRED })
  sentence!: string

  @IsEnum(TranslatorLanguage, {
    message: ErrorCode.SENTENCE_LANGUAGE_IS_INVALID_ENUM,
  })
  language!: TranslatorLanguage
}
