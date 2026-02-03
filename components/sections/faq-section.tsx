import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "Q1. 개인회생과 개인파산의 차이가 뭔가요?",
      answer:
        "개인회생은 일정 소득이 있는 분이 3~5년간 변제 계획을 이행한 후 나머지 채무를 면책받는 제도입니다.\n\n개인파산은 소득이 없거나 변제 능력이 없는 분이 법원의 면책 결정으로 즉시 채무를 소멸시키는 제도입니다.\n\n전문가 상담을 통해 본인에게 맞는 절차를 안내받으실 수 있습니다.",
    },
    {
      question: "Q2. 가족이나 직장에 알려지나요?",
      answer:
        "아닙니다. 개인회생·파산은 본인의 신용정보에만 기록되며, 가족이나 직장에 별도로 통지되지 않습니다.\n\n다만, 배우자가 보증인이거나 공동 채무자인 경우에는 일부 절차에서 배우자의 협조가 필요할 수 있습니다.",
    },
    {
      question: "Q3. 비용은 얼마나 드나요?",
      answer:
        "사건의 복잡도와 채무액에 따라 다르지만, 기본 수임료는 상담 시 투명하게 안내드립니다.\n\n김앤파트너스는 최대 4+1회 분할 납부를 지원하며, 불필요한 대출을 권유하지 않습니다.",
    },
    {
      question: "Q4. 보정명령·권고가 나오면 기각되는 건가요?",
      answer:
        "아닙니다. 보정명령은 정상적인 절차입니다.\n\n법원이 추가 자료나 보완을 요청하는 것일 뿐, 사건이 잘못되고 있다는 의미가 아닙니다.\n\n김앤파트너스는 보정명령에 신속하게 대응하여 개시결정으로 이어질 수 있도록 관리합니다.",
    },
    {
      question: "Q5. 모든 빚이 탕감되나요?",
      answer:
        "세금, 4대보험금, 양육비, 임금 등 일부 채무는 면책되지 않습니다.\n\n그러나 대부분의 금융 채무(신용대출, 카드값, 사채빚 등)는 80~90% 이상 탕감받을 수 있습니다.\n\n구체적인 탕감 가능 여부는 상담을 통해 확인하실 수 있습니다.",
    },
    {
      question: "Q6. 도박이나 투자 실패로 생긴 빚도 가능한가요?",
      answer: "도박, 주식, 코인 등으로 인한 채무도 개인회생 신청이 가능합니다.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="text-base font-semibold uppercase tracking-wider text-trust">QnA</span>
        </div>
        <h2 className="mb-16 text-center text-3xl font-bold text-foreground md:text-5xl">자주 묻는 질문</h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-card-foreground hover:text-trust hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg md:text-lg whitespace-pre-line leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
