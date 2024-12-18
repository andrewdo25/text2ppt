from readconfig.myconfig import MyConfig
from chain.gpt_memory import GptChain
from generation.prompts import (
    PREDICT_TITLE,
    PREDICT_TITLE_V2,
    PREDICT_OUTLINE,
    PREDICT_OUTLINE_V2,
    PREDICT_BODY,
    PREDICT_BODY_FIXED_OUTLINE,
)


class Gen:
    config: MyConfig = None
    chain: GptChain = None

    def __init__(self, session_id):
        self.config = MyConfig()
        # print(f"open ai key:{self.config.OPENAI_API_KEY}")
        self.chain = GptChain(
            openai_api_key=self.config.OPENAI_API_KEY,
            session_id=session_id,
            redis_url=self.config.REDIS_URL,
            openai_base_url=self.config.OPENAI_BASE_URL,
        )


class GenTitle(Gen):
    def __init__(self, session_id):
        super().__init__(session_id)

    def predict_title(self, query):
        text = PREDICT_TITLE.format(query)
        return self.chain.predict(text)

    def predict_title_v2(self, form, role, title, topic_num=1):
        text = PREDICT_TITLE_V2.format(
            role=role, title=title, topic_num=topic_num, form=form
        )
        return self.chain.predict(text)


class GenOutline(Gen):
    def __init__(self, session_id):
        super().__init__(session_id)

    def predict_outline(self, query):
        text = PREDICT_OUTLINE.format(query)
        return self.chain.predict(text)

    def predict_outline_v2(self, title, title_requirement):
        if title_requirement is None or title_requirement == "":
            title_requirement = "clear structure"
        text = PREDICT_OUTLINE_V2.format(
            title=title, title_requirement=title_requirement
        )
        return self.chain.predict(text)


class GenBody(Gen):
    def __init__(self, session_id):
        super().__init__(session_id)

    def predict_body(self, fix_outline=None, requirement=None):
        if requirement == "" or requirement is None:
            requirement = "rich content"

        if fix_outline == "" or fix_outline is None:
            text = PREDICT_BODY.format(requirement=requirement)
        else:
            text = PREDICT_BODY_FIXED_OUTLINE.format(
                fix_outline=fix_outline, requirement=requirement
            )
        return self.chain.predict(text)
