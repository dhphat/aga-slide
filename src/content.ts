export type Language = 'en' | 'vi';

export const content = {
  en: {
    hero: {
      scroll: "Scroll to Discover"
    },
    slide1: {
      title: "Agentic Analytics",
      tagline: "PRODUCT REQUIREMENTS DOCUMENT · FINAL PROJECT",
      subtitle: "Agentic Data Analytics Platform for Engineering Datasets",
      desc: "A conversational workspace where four agents turn questions into trustworthy answers — plan, query, visualise, interpret.",
      version: "VERSION: 1.0",
      status: "STATUS: Draft",
      date: "DATE: May 31, 2026",
      audience: "AUDIENCE: Engineering · Design · Product"
    },
    slide2: {
      title: "ENGINEERING ANALYSTS ARE STUCK",
      subtitle: "Data analysis today is heavier than it has to be.",
      points: [
        {
          num: "01",
          title: "Data lives everywhere",
          desc: "CSVs in chat, copies in inboxes, no source of truth. Nobody knows which version is current."
        },
        {
          num: "02",
          title: "Hidden relationships",
          desc: "No diagram, every join is a guess. Nobody holds the full schema in their head."
        },
        {
          num: "03",
          title: "SQL by hand, every time",
          desc: "The person who knows the data hates writing SQL. So every question waits on someone else."
        },
        {
          num: "04",
          title: "Results vanish",
          desc: "Last week's chart is a screenshot. Next week's question starts from zero."
        }
      ],
      question: "Why can't an analyst just type a sentence and see the answer?"
    },
    slide3: {
      title: "THREE CLAIMS WE ARE MAKING",
      subtitle: "Three things this platform is supposed to do.",
      claims: [
        {
          title: "Plain-English to trustworthy answer.",
          desc: "A sentence in natural language returns the same result a senior analyst would write by hand, on real engineering data."
        },
        {
          title: "Joins on its own when it can.",
          desc: "The system reads the schema, finds the right table pair, and joins. When confidence is low it asks instead of guessing."
        },
        {
          title: "Memory that compounds.",
          desc: "Every plan, query and result is replayable from the trace. Next week's question can build on last week's answer."
        }
      ]
    },
    slide4: {
      title: "PRIOR ART",
      subtitle: "Four things already exist. None of them fit.",
      intro: "We looked at the four families analysts already reach for. Each one does part of the job and stops.",
      items: [
        {
          title: "BI dashboards (Tableau, Power BI)",
          desc: "Polished views once someone has written the SQL.",
          missing: "Missing: the leap from a plain question to a query."
        },
        {
          title: "General assistants (ChatGPT, Claude)",
          desc: "Can talk about data, can write SQL on demand.",
          missing: "Missing: memory of the project after the chat closes."
        },
        {
          title: "Text-to-SQL tools (Vanna, NSQL)",
          desc: "Translate one sentence into one query.",
          missing: "Missing: plan, chart, follow-up."
        },
        {
          title: "Single-agent ReAct",
          desc: "One agent reasons and tools its way through the problem.",
          missing: "Missing: contracts between steps. When one step fails, the whole turn is lost."
        }
      ],
      conclusion: "WE SIT AT THE INTERSECTION AND ADD WHAT THE OTHERS ARE MISSING."
    },
    slide5: {
      title: "WHERE A REQUEST LIVES",
      subtitle: "A request crosses five boundaries.",
      desc: "From the moment the analyst hits enter, the question travels through a stack with clear seams. Each boundary is a contract; the layers above and below can change without breaking each other.",
      why: "THE POINT OF BOUNDARIES: Swap the UI without touching orchestration. Move the analytics engine off DuckDB without touching the API. Replay any agent action from the trace, deterministically.",
      layers: [
        {
          num: "01",
          name: "CONVERSATIONAL CLIENT",
          desc: "Browser surface where the analyst lives. Streams the plan, tool calls and results live."
        },
        {
          num: "02",
          name: "SESSION GATEWAY",
          desc: "Validates the session, scopes data access. Every request is scoped to the project owner."
        },
        {
          num: "03",
          name: "ORCHESTRATION KERNEL",
          desc: "Plans, dispatches, observes, re-plans on failure. The heart of the system."
        },
        {
          num: "04",
          name: "TOOL BOUNDARY",
          desc: "Every path agents take to touch data is logged here. Data, storage and LLM access through one gate."
        },
        {
          num: "05",
          name: "STORAGE TIER",
          desc: "Columnar engine for analytical workloads. Relational store for metadata. Object store for files and artifacts."
        }
      ]
    },
    slide6: {
      title: "FOUR SPECIALISED AGENTS",
      subtitle: "A question travels through four hands.",
      agents: [
        {
          num: "1",
          name: "Planner",
          desc: "Breaks the question into runnable steps. Re-plans when the data step stumbles.",
          contract: "HANDS OFF • ORDERED PLAN"
        },
        {
          num: "2",
          name: "Data",
          desc: "Picks the right tables. Writes the query. Executes on the columnar engine.",
          contract: "HANDS OFF • RESULT TABLE"
        },
        {
          num: "3",
          name: "Visualisation",
          desc: "Reads the result shape. Proposes the chart that makes the answer obvious.",
          contract: "HANDS OFF • CHART ARTIFACT"
        },
        {
          num: "4",
          name: "Insight",
          desc: "Spots anomalies. Summarises in one line. Suggests the next question to ask.",
          contract: "HANDS OFF • NEXT QUESTION"
        }
      ],
      bottom: "Failure loops back, not forward. When the data step misses an ambiguous join, the planner re-plans from the trace. Only the failing step is replayed — the conversation does not restart."
    },
    slide7: {
      title: "WHAT THE SYSTEM REMEMBERS",
      subtitle: "One schema for the story. Four layers for the memory.",
      coreTitle: "RELATIONAL CORE",
      schema: {
        project: "PROJECT\n• string name\n• string owner",
        conversation: "CONVERSATION\n• string title\n• string model",
        dataset: "DATASET\n• json schema\n• path parquet",
        artifact: "ARTIFACT\n• string kind\n• vector embedding"
      },
      schemaRelations: {
        owns: "owns",
        produces: "produces",
        holds: "holds",
        feeds: "feeds"
      },
      agentsRecallTitle: "WHAT THE AGENTS RECALL",
      layers: [
        {
          layer: "LAYER 01",
          name: "DATASET",
          desc: "Schema, samples, profile notes. Find a table by what it contains, not by what it is called."
        },
        {
          layer: "LAYER 02",
          name: "ARTIFACT",
          desc: "Charts and queries indexed by meaning. The phrase 'the chart from last week' resolves to a real file."
        },
        {
          layer: "LAYER 03",
          name: "EXECUTION",
          desc: "Every plan and every tool call. Input, output, and status kept per step. Any step can be replayed."
        },
        {
          layer: "LAYER 04",
          name: "CONVERSATION",
          desc: "The full chat, with quiet compaction. Context shrinks gracefully near the model's window without losing the thread."
        }
      ]
    },
    slide8: {
      title: "HOW WE MEASURED",
      subtitle: "Olist, 30 questions, two systems, one engine.",
      metrics: {
        questions: "30 Q\nNATURAL-LANGUAGE PROMPTS",
        tables: "9 OLIST TABLES UNDER TEST",
        orders: "100 K ORDERS",
        customers: "99K CUSTOMERS • 32K PRODUCTS",
        systems: "2 SYSTEMS\nMULTI-AGENT VS SINGLE-SHOT"
      },
      mixTitle: "QUESTION MIX",
      mix: [
        "10 SINGLE TABLE",
        "15 JOIN (2-5 TABLES)",
        "5 ANOMALY"
      ],
      runtimeTitle: "RUNTIME & MODELS",
      runtime: [
        "Planner / Visual / Insight: gpt-4",
        "Data (SQL writer): gpt-4",
        "Storage engine: DuckDB (in-process)",
        "Hardware: Personal laptop",
        "Temperature: 0"
      ],
      baselineTitle: "BASELINE DEFINITION",
      baselineDesc: "Single-agent = same model (gpt-4), same temperature, same DuckDB engine, same 30 questions. One prompt asks for the SQL directly — no planner, no memory, no re-plan on error. Execution-match scored identically. Ground truth labelled by the authors and reviewed twice.",
      schemaTitle: "OLIST SCHEMA — ORDERS AT THE HUB"
    },
    slide9: {
      title: "DOES IT GET THE ANSWER RIGHT?",
      subtitle: "Strong on the easy ones. Honest about the rest.",
      chartTitle: "EXECUTION-MATCH ACCURACY BY QUESTION TYPE - MULTI-AGENT (LIME) VS SINGLE-AGENT (GREY).",
      chartDesc: "Single-table answers land 19 times out of 20. Counts, sums and time series on one table are the bread-and-butter case, and the platform handles them at 95% execution-match.",
      chartData: {
        labels: ["single", "join", "anomaly"],
        multi: [95, 60, 40],
        single: [53, 7, 0]
      },
      matrixTitle: "JOINT CLASSIFIER ON MULTI-AGENT. P=0.72 · R=0.87 · F1=0.79.",
      matrixHeaders: ["Predicted Yes", "Predicted No"],
      matrixRows: [
        { label: "Actual Yes", values: [13, 2] },
        { label: "Actual No", values: [5, 10] }
      ]
    },
    slide10: {
      title: "MULTI-AGENT VS SINGLE-AGENT",
      subtitle: "A small tax in time. A large gain in answers.",
      tableTitle: "HEAD-TO-HEAD METRICS",
      headers: ["METRIC", "MULTI-AGENT", "SINGLE-AGENT"],
      rows: [
        ["Overall accuracy", "68.3%", "21.2%"],
        ["Join-question accuracy", "60.0%", "7.0%"],
        ["Anomaly accuracy", "40.0%", "0.0%"],
        ["Total p95 latency", "12.4 s", "2.6 s"],
        ["JOIN classifier F1", "0.79", "0.28"],
        ["First-failure recoveries", "4 / 30", "0 / 30"]
      ],
      chartTitle: "LATENCY IN MILLISECONDS - LLM, SQL, TOTAL - MULTI-AGENT (LIME) VS SINGLE-AGENT (GREY). 30 QUESTIONS EACH.",
      desc: "Multi-agent pays roughly a 10-second tax at the p95 tail because it plans, generates SQL, draws a chart and summarizes in sequence. In exchange overall accuracy moves from 21% to 68% and the system actually lands joins where the single-shot baseline almost never does. The gap is widest exactly where analysts need the help."
    },
    slide11: {
      title: "SEE IT RUN END-TO-END",
      subtitle: "One question. Five visible steps. One answer with a chart.",
      steps: [
        {
          num: "1",
          title: "Question in plain English",
          desc: "“Top 5 product categories by revenue in 2018”"
        },
        {
          num: "2",
          title: "Planner returns ordered steps",
          desc: "join • aggregate • rank • visualise"
        },
        {
          num: "3",
          title: "Data agent writes & runs SQL",
          desc: "3 tables • 4 joins • 1 GROUP BY"
        },
        {
          num: "4",
          title: "Visualisation proposes a chart",
          desc: "horizontal bar • sorted descending"
        },
        {
          num: "5",
          title: "Insight writes the one-liner",
          desc: "“Health & Beauty leads, 22% of total”"
        }
      ],
      demoTitle: "LIVE ORCHESTRATION TRACE"
    },
    slide12: {
      title: "END-TO-END ON A REAL USER LAPTOP",
      subtitle: "Five and a half minutes from question to a finished report.",
      meta: {
        model: "MODEL: gpt-4.1-mini",
        env: "ENVIRONMENT: Docker · 1 user",
        device: "DEVICE: Personal laptop · Windows 11",
        dataset: "DATASET: event_game_data_collected.csv · 1000 rows"
      },
      timeline: [
        {
          step: "1",
          title: "Clarify",
          time: "~30 s",
          range: "13:46:09 → 13:46:42 UTC",
          desc: "From the user's query to the agent asking the first clarification question. The system reads the schema, spots the ambiguity, and writes a follow-up."
        },
        {
          step: "2",
          title: "Plan",
          time: "~4 min",
          range: "13:49:08 → 13:53:53 UTC",
          desc: "After the clarification answer comes back, the Planner drafts the full analysis plan analyze_plan and waits for the user's accept."
        },
        {
          step: "3",
          title: "Execute & report",
          time: "~1 min",
          range: "13:53:53 → 13:54:49 UTC",
          desc: "Plan accepted → Data agent runs the queries, Visualisation drafts the charts, Insight writes the one-liner, the report is assembled."
        }
      ],
      footer: "Total wall time, question → finished report: ",
      footerValue: "5 m 30 s",
      footerDesc: "MEASURED ON THE LIVE ATRIA BUILD"
    },
    slide13: {
      title: "HONEST ABOUT THE EDGES",
      subtitle: "What it does not do yet, and what comes after.",
      desc: "The numbers in the previous slides name the limits. These are the conscious decisions: where we stopped on purpose, and where the next iteration goes.",
      unsolvedTitle: "WHAT WE DID NOT SOLVE YET",
      unsolved: [
        "Long-tail joins still hurt. Five-table joins drop the accuracy from 60% to roughly 35%. Borderline confidence triggers a confirmation step; the analyst still has to disambiguate occasionally.",
        "Anomaly detection is shallow. 40% exact match on the labelled subset using z-score alone. Seasonality and multivariate drift are not modelled yet.",
        "Single user, single project. No collaboration, no role-based access in this MVP.",
        "English only. Multilingual natural-language input is in the next round."
      ],
      nextTitle: "WHAT COMES NEXT",
      next: [
        "Auto-join confidence guard. Cut false positives by asking the analyst when table-pair similarity is borderline.",
        "Statistical anomaly module. Replace the heuristic with a z-score / changepoint pass on top of the result.",
        "Dashboard publishing. Promote a saved artifact to a shareable view.",
        "Scheduled questions. Pin a question, re-run on a cron, surface deltas."
      ]
    },
    slide14: {
      title: "WHAT THE SYSTEM IS BUILT WITH",
      subtitle: "Five layers, one coherent stack.",
      layers: [
        {
          layer: "5",
          name: "LAYER 05 · EXPERIENCE",
          tags: ["React 18", "Vite", "Tailwind", "Zustand"],
          desc: "The chat surface, chart frames and trace viewer the analyst actually sees."
        },
        {
          layer: "4",
          name: "LAYER 04 · REASONING & AGENTS",
          tags: ["OpenAI SDK 1.40+", "gpt-4o", "gpt-4o-mini", "temp 0"],
          desc: "Four agents plan, query, visualise, interpret — tools called through a strict JSON schema."
        },
        {
          layer: "3",
          name: "LAYER 03 · DATA ENGINE",
          tags: ["DuckDB 1.0", "Pandas", "Matplotlib", "Parquet · CSV"],
          desc: "Columnar SQL in-process. Numbers, joins and aggregates live and breathe here."
        },
        {
          layer: "2",
          name: "LAYER 02 · RUNTIME & SERVICES",
          tags: ["Python 3.11", "FastAPI", "WebSocket", "Pydantic"],
          desc: "Async services, streaming traces and typed schemas between every hop."
        },
        {
          layer: "1",
          name: "LAYER 01 · FOUNDATION",
          tags: ["Docker 24+", "docker compose"],
          desc: "One container, one command. Same image runs everywhere — no host setup beyond Docker itself."
        }
      ]
    },
    slide15: {
      title: "WRAP",
      subtitle: "Three things to take away.",
      takeaways: [
        {
          num: "01",
          title: "Plain English lands on real data",
          desc: "95% on single-table, 60% on multi-table joins, 40% on anomaly questions. The single-shot baseline lands 7% of the joins."
        },
        {
          num: "02",
          title: "Four small agents beat one big prompt",
          desc: "Overall accuracy 68.3% vs 21.2%, JOIN F1 0.79 vs 0.28. The architecture trades a little latency for a lot of reliability."
        },
        {
          num: "03",
          title: "Memory turns sessions into building blocks",
          desc: "Plans, queries and artifacts are replayable. Knowledge accumulates instead of evaporating."
        }
      ],
      back: "BACK TO START",
      qaTitle: "LIKELY QUESTIONS",
      qa: [
        {
          q: "Why a custom DuckDB layer instead of Postgres for analytics?",
          a: "Postgres is strong at metadata and OLTP. DuckDB is an order of magnitude faster for the columnar aggregates our questions ask for."
        },
        {
          q: "Why a fixed four-agent split?",
          a: "The split mirrors what an analyst's brain actually does: plan, query, visualize, interpret. Smaller prompts behave more predictably; we can swap any one without retraining the rest."
        },
        {
          q: "How did the JOIN classifier reach F1 0.79?",
          a: "Schema summary plus three sample rows per table in the Planner's prompt. The model picks the right table pair on confidence, asks the user when similarity is borderline. Precision 0.72, recall 0.87."
        },
        {
          q: "What about anomaly detection?",
          a: "Currently a z-score pass over the result column plus a one-line natural explanation. 40% exact match against analyst-labelled anomalies on the 5-question subset. Still the loosest part of the system."
        }
      ]
    },
    slide16: {
      title: "Thank you.",
      subtitle: "For listening, for your attention — and for the questions that come next. The floor is yours.",
      projectLabel: "PROJECT",
      projectValue: "Agentic Data Analytics Platform",
      docLabel: "DOCUMENT",
      docValue: "PRD v1.0 • May 31, 2026",
      footer: "Questions welcome"
    },
    slide17: {
      title: "WHICH PIECE CARRIES THE WEIGHT?",
      subtitle: "Remove one component at a time. Watch the accuracy drop.",
      descTitle: "Overall accuracy on the same 30 questions, one component disabled at a time.",
      data: [
        { name: "Full system", val: 68.3, diff: null },
        { name: "No Planner", val: 41.5, diff: -26.8 },
        { name: "No Memory", val: 52.0, diff: -16.3 },
        { name: "No Retry loop", val: 55.7, diff: -12.6 }
      ],
      desc: "The planner step is the largest single contributor — removing it costs almost 27 points of accuracy because the data agent has no scaffolding to decompose joins. Memory carries the second-largest weight: without table summaries the model picks the wrong table pair on the borderline cases. The retry loop matters mostly on transient SQL errors."
    }
  },
  vi: {
    hero: {
      scroll: "Cuộn để Khám phá"
    },
    slide1: {
      title: "Phân tích Tác nhân",
      tagline: "TÀI LIỆU YÊU CẦU SẢN PHẨM · ĐỒ ÁN TỐT NGHIỆP",
      subtitle: "Nền tảng Phân tích Dữ liệu Agentic cho Tập dữ liệu Kỹ thuật",
      desc: "Một không gian làm việc hội thoại nơi bốn tác nhân biến câu hỏi thành câu trả lời đáng tin cậy — lập kế hoạch, truy vấn, trực quan hóa, diễn giải.",
      version: "PHIÊN BẢN: 1.0",
      status: "TRẠNG THÁI: Dự thảo",
      date: "NGÀY: 31 tháng 5, 2026",
      audience: "ĐỐI TƯỢNG: Kỹ thuật · Thiết kế · Sản phẩm"
    },
    slide2: {
      title: "KỸ SƯ PHÂN TÍCH ĐANG BỊ MẮC KẸT",
      subtitle: "Phân tích dữ liệu ngày nay đang nặng nề hơn mức cần thiết.",
      points: [
        {
          num: "01",
          title: "Dữ liệu ở khắp mọi nơi",
          desc: "Tệp CSV trong đoạn chat, bản sao trong hộp thư đến, không có nguồn chân lý. Không ai biết phiên bản nào là mới nhất."
        },
        {
          num: "02",
          title: "Mối quan hệ bị ẩn giấu",
          desc: "Không có lược đồ (diagram), mọi liên kết (join) đều là đoán mò. Không ai có thể nắm giữ toàn bộ schema trong đầu."
        },
        {
          num: "03",
          title: "Viết SQL thủ công mọi lúc",
          desc: "Người hiểu rõ dữ liệu thì ghét viết SQL. Vì vậy, mọi câu hỏi đều phải chờ đợi người khác thực hiện."
        },
        {
          num: "04",
          title: "Kết quả biến mất",
          desc: "Biểu đồ tuần trước chỉ là ảnh chụp màn hình. Câu hỏi của tuần tới lại phải bắt đầu lại từ con số không."
        }
      ],
      question: "Tại sao nhà phân tích không thể chỉ cần gõ một câu lệnh và thấy ngay câu trả lời?"
    },
    slide3: {
      title: "BA TUYÊN BỐ CHÚNG TÔI ĐƯA RA",
      subtitle: "Ba mục tiêu cốt lõi mà nền tảng này cam kết thực hiện.",
      claims: [
        {
          title: "Từ tiếng Anh tự nhiên đến câu trả lời đáng tin cậy.",
          desc: "Một câu nói bằng ngôn ngữ tự nhiên sẽ trả về kết quả chính xác tương đương một nhà phân tích cao cấp tự viết tay, trên dữ liệu kỹ thuật thực tế."
        },
        {
          title: "Tự động kết hợp (join) bảng khi có thể.",
          desc: "Hệ thống tự đọc lược đồ schema, tìm cặp bảng phù hợp và tự liên kết. Khi độ tin cậy thấp, nó sẽ hỏi người dùng thay vì tự đoán."
        },
        {
          title: "Khả năng ghi nhớ tích lũy.",
          desc: "Mọi kế hoạch, truy vấn và kết quả đều có thể tái lập hoàn toàn từ nhật ký (trace). Câu hỏi tuần sau có thể kế thừa từ câu trả lời tuần trước."
        }
      ]
    },
    slide4: {
      title: "CÔNG NGHỆ HIỆN TẠI",
      subtitle: "Bốn giải pháp đã tồn tại nhưng không giải pháp nào phù hợp.",
      intro: "Chúng tôi đã xem xét bốn nhóm công cụ mà các nhà phân tích hiện đang sử dụng. Mỗi nhóm chỉ giải quyết được một phần công việc rồi dừng lại.",
      items: [
        {
          title: "Hệ thống Báo cáo BI (Tableau, Power BI)",
          desc: "Chỉ hiển thị các biểu đồ đẹp mắt sau khi đã có người viết sẵn câu lệnh SQL.",
          missing: "Điểm thiếu: Khoảng cách từ câu hỏi tự nhiên đến câu lệnh truy vấn."
        },
        {
          title: "Trợ lý ảo đa năng (ChatGPT, Claude)",
          desc: "Có thể thảo luận về dữ liệu, có thể viết SQL theo yêu cầu.",
          missing: "Điểm thiếu: Không nhớ gì về dự án sau khi phiên chat đóng lại."
        },
        {
          title: "Công cụ Text-to-SQL (Vanna, NSQL)",
          desc: "Dịch một câu nói thành một câu lệnh truy vấn duy nhất.",
          missing: "Điểm thiếu: Thiếu kế hoạch tổng thể, biểu đồ trực quan, và phân tích tiếp theo."
        },
        {
          title: "Mô hình Đơn Tác Nhân (Single-agent ReAct)",
          desc: "Một tác nhân tự lập luận và dùng các công cụ để giải quyết vấn đề.",
          missing: "Điểm thiếu: Ràng buộc giữa các bước. Khi một bước thất bại, toàn bộ lượt chạy sẽ bị mất trắng."
        }
      ],
      conclusion: "CHÚNG TÔI ĐỨNG Ở GIAO ĐIỂM VÀ BỔ SUNG NHỮNG GÌ CÁC CÔNG CỤ KHÁC CÒN THIẾU."
    },
    slide5: {
      title: "ĐƯỜNG ĐI CỦA MỘT YÊU CẦU",
      subtitle: "Một yêu cầu đi qua năm ranh giới.",
      desc: "Từ khoảnh khắc nhà phân tích nhấn enter, câu hỏi đi qua một ngăn xếp hệ thống với các ranh giới rõ ràng. Mỗi ranh giới là một cam kết; các lớp trên và dưới có thể thay đổi mà không làm hỏng lẫn nhau.",
      why: "MỤC TIÊU CỦA RANH GIỚI: Thay đổi giao diện (UI) mà không ảnh hưởng đến bộ điều phối. Chuyển đổi công cụ phân tích khỏi DuckDB mà không phải sửa API. Tái lập bất kỳ hành động tác nhân nào từ nhật ký một cách nhất quán.",
      layers: [
        {
          num: "01",
          name: "ỨNG DỤNG HỘI THOẠI (CLIENT)",
          desc: "Giao diện trình duyệt nơi nhà phân tích làm việc. Truyền tải trực tiếp kế hoạch, các lượt gọi công cụ và kết quả thời gian thực."
        },
        {
          num: "02",
          name: "CỔNG PHIÊN LÀM VIỆC (GATEWAY)",
          desc: "Xác thực phiên làm việc, phân quyền truy cập dữ liệu. Mọi yêu cầu đều được giới hạn theo chủ sở hữu dự án."
        },
        {
          num: "03",
          name: "LÕI ĐIỀU PHỐI (KERNEL)",
          desc: "Lập kế hoạch, phân phát tác vụ, giám sát và lập lại kế hoạch khi gặp lỗi. Đây là trái tim của hệ thống."
        },
        {
          num: "04",
          name: "RANH GIỚI CÔNG CỤ (TOOL BOUNDARY)",
          desc: "Mọi đường dẫn tác nhân chạm vào dữ liệu đều được ghi lại tại đây. Dữ liệu, lưu trữ và LLM được truy cập qua một cổng duy nhất."
        },
        {
          num: "05",
          name: "TẦNG LƯU TRỮ (STORAGE TIER)",
          desc: "Công cụ dạng cột cho tác vụ phân tích. Lưu trữ quan hệ cho siêu dữ liệu. Lưu trữ đối tượng cho các tệp và tạo tác (artifacts)."
        }
      ]
    },
    slide6: {
      title: "BỐN TÁC NHÂN CHUYÊN BIỆT",
      subtitle: "Một câu hỏi đi qua bốn bàn tay xử lý.",
      agents: [
        {
          num: "1",
          name: "Tác nhân Lập kế hoạch (Planner)",
          desc: "Chia nhỏ câu hỏi thành các bước có thể thực thi. Lập lại kế hoạch khi bước xử lý dữ liệu gặp trở ngại.",
          contract: "BÀN GIAO • KẾ HOẠCH ĐƯỢC SẮP XẾP"
        },
        {
          num: "2",
          name: "Tác nhân Dữ liệu (Data)",
          desc: "Chọn đúng bảng dữ liệu. Viết câu lệnh truy vấn SQL. Thực thi trên công cụ dữ liệu dạng cột.",
          contract: "BÀN GIAO • BẢNG KẾT QUẢ"
        },
        {
          num: "3",
          name: "Tác nhân Trực quan (Visualisation)",
          desc: "Đọc cấu trúc kết quả. Đề xuất biểu đồ phù hợp nhất giúp câu trả lời trở nên rõ ràng trực quan.",
          contract: "BÀN GIAO • BIỂU ĐỒ TẠO TÁC"
        },
        {
          num: "4",
          name: "Tác nhân Chuyên sâu (Insight)",
          desc: "Phát hiện điểm bất thường. Tóm tắt kết quả trong một dòng. Gợi ý câu hỏi tiếp theo cần truy vấn.",
          contract: "BÀN GIAO • CÂU HỎI TIẾP THEO"
        }
      ],
      bottom: "Vòng lặp lỗi hướng về sau, không hướng về trước. Khi bước dữ liệu bỏ lỡ một liên kết mơ hồ, tác nhân Lập kế hoạch sẽ vẽ lại kế hoạch từ nhật ký. Chỉ bước lỗi được thực thi lại — cuộc hội thoại không phải bắt đầu lại từ đầu."
    },
    slide7: {
      title: "HỆ THỐNG GHI NHỚ NHỮNG GÌ?",
      subtitle: "Một cấu trúc chung cho toàn câu chuyện. Bốn tầng bộ nhớ lưu trữ thông tin.",
      coreTitle: "LÕI DỮ LIỆU QUAN HỆ",
      schema: {
        project: "DỰ ÁN (PROJECT)\n• string name\n• string owner",
        conversation: "HỘI THOẠI (CONVERSATION)\n• string title\n• string model",
        dataset: "TẬP DỮ LIỆU (DATASET)\n• json schema\n• path parquet",
        artifact: "TẠO TÁC (ARTIFACT)\n• string kind\n• vector embedding"
      },
      schemaRelations: {
        owns: "sở hữu",
        produces: "tạo ra",
        holds: "chứa",
        feeds: "cung cấp"
      },
      agentsRecallTitle: "NHỮNG GÌ CÁC TÁC NHÂN NHỚ",
      layers: [
        {
          layer: "TẦNG 01",
          name: "TẬP DỮ LIỆU",
          desc: "Cấu trúc schema, dữ liệu mẫu, ghi chú hồ sơ. Tìm bảng bằng những gì nó chứa, không phải bằng tên gọi của nó."
        },
        {
          layer: "TẦNG 02",
          name: "TẠO TÁC",
          desc: "Biểu đồ và truy vấn được chỉ mục theo ngữ nghĩa. Cụm từ 'biểu đồ tuần trước' sẽ phân giải chính xác đến một tệp thực tế."
        },
        {
          layer: "TẦNG 03",
          name: "THỰC THI",
          desc: "Mọi kế hoạch và mọi lượt gọi công cụ. Đầu vào, đầu ra và trạng thái được lưu giữ theo từng bước. Bất kỳ bước nào cũng có thể được phát lại."
        },
        {
          layer: "TẦNG 04",
          name: "HỘI THOẠI",
          desc: "Toàn bộ lịch sử chat, với cơ chế nén tự động. Ngữ cảnh thu nhỏ một cách mượt mà gần cửa sổ mô hình mà không làm mất luồng suy nghĩ."
        }
      ]
    },
    slide8: {
      title: "CÁCH CHÚNG TÔI ĐO LƯỜNG",
      subtitle: "Olist, 30 câu hỏi, hai hệ thống, một công cụ.",
      metrics: {
        questions: "30 CÂU HỎI\nBẰNG NGÔN NGỮ TỰ NHIÊN",
        tables: "9 BẢNG OLIST DƯỚI BÀI KIỂM TRA",
        orders: "100 NGHÌN ĐƠN HÀNG",
        customers: "99K KHÁCH HÀNG • 32K SẢN PHẨM",
        systems: "2 HỆ THỐNG\nĐA TÁC NHÂN VS PHÁT DUY NHẤT"
      },
      mixTitle: "CƠ CẤU CÂU HỎI",
      mix: [
        "10 CÂU BẢNG ĐƠN (SINGLE)",
        "15 CÂU LIÊN KẾT (JOIN 2-5 BẢNG)",
        "5 CÂU PHÁT HIỆN BẤT THƯỜNG"
      ],
      runtimeTitle: "MÔ HÌNH & MÔI TRƯỜNG",
      runtime: [
        "Lập kế hoạch / Trực quan / Nhận định: gpt-4",
        "Tác nhân Dữ liệu (viết SQL): gpt-4",
        "Bộ máy lưu trữ: DuckDB (in-process)",
        "Thiết bị: Laptop cá nhân",
        "Tham số Temperature: 0"
      ],
      baselineTitle: "ĐỊNH NGHĨA HỆ THỐNG CƠ SỞ (BASELINE)",
      baselineDesc: "Hệ thống cơ sở (Single-agent) = sử dụng cùng mô hình (gpt-4), cùng nhiệt độ (temperature), cùng công cụ DuckDB, cùng 30 câu hỏi. Một prompt yêu cầu SQL trực tiếp — không lập kế hoạch, không bộ nhớ, không lập lại kế hoạch khi gặp lỗi. Điểm kiểm tra khớp thực thi được chấm điểm như nhau. Dữ liệu chuẩn (ground truth) được gán nhãn bởi các tác giả và được kiểm duyệt hai lần.",
      schemaTitle: "LƯỢC ĐỒ OLIST — ĐƠN HÀNG LÀ TRUNG TÂM"
    },
    slide9: {
      title: "HỆ THỐNG CÓ ĐƯA RA ĐÁP ÁN ĐÚNG?",
      subtitle: "Mạnh mẽ ở những câu hỏi dễ. Trung thực ở phần còn lại.",
      chartTitle: "ĐỘ CHÍNH XÁC KHỚP THỰC THI (EXECUTION-MATCH) THEO LOẠI CÂU HỎI - ĐA TÁC NHÂN (XANH CHANH) VS ĐƠN TÁC NHÂN (XÁM).",
      chartDesc: "Các câu hỏi bảng đơn đạt tỷ lệ chính xác 19 trên 20 lần. Đếm, tổng và chuỗi thời gian trên một bảng là những trường hợp cơ bản nhất, và nền tảng xử lý chúng với độ khớp thực thi lên đến 95%.",
      chartData: {
        labels: ["Bảng đơn", "Liên kết bảng", "Bất thường"],
        multi: [95, 60, 40],
        single: [53, 7, 0]
      },
      matrixTitle: "BỘ PHÂN LOẠI LIÊN KẾT TRÊN ĐA TÁC NHÂN. P=0.72 · R=0.87 · F1=0.79.",
      matrixHeaders: ["Dự đoán Có", "Dự đoán Không"],
      matrixRows: [
        { label: "Thực tế Có", values: [13, 2] },
        { label: "Thực tế Không", values: [5, 10] }
      ]
    },
    slide10: {
      title: "ĐA TÁC NHÂN VS ĐƠN TÁC NHÂN",
      subtitle: "Đổi một chút thời gian lấy lượng lớn câu trả lời đúng.",
      tableTitle: "ĐO LƯỜNG ĐỐI ĐẦU TRỰC TIẾP",
      headers: ["CHỈ SỐ", "ĐA TÁC NHÂN (MULTI-AGENT)", "ĐƠN TÁC NHÂN (SINGLE-AGENT)"],
      rows: [
        ["Độ chính xác chung", "68.3%", "21.2%"],
        ["Độ chính xác câu liên kết (Join)", "60.0%", "7.0%"],
        ["Độ chính xác phát hiện bất thường", "40.0%", "0.0%"],
        ["Độ trễ p95 tổng thể", "12.4 giây", "2.6 giây"],
        ["F1-score bộ phân loại JOIN", "0.79", "0.28"],
        ["Khôi phục từ thất bại đầu tiên", "4 / 30", "0 / 30"]
      ],
      chartTitle: "ĐỘ TRỄ TÍNH BẰNG MILISECOND - LLM, SQL, TỔNG - ĐA TÁC NHÂN (LIME) VS ĐƠN TÁC NHÂN (XÁM). 30 CÂU HỎI MỖI BÊN.",
      desc: "Hệ thống đa tác nhân trả thêm một khoảng 'thuế độ trễ' khoảng 10 giây ở cận p95 vì nó phải lập kế hoạch, tạo SQL, vẽ biểu đồ và tóm tắt theo trình tự tuần tự. Đổi lại, độ chính xác tổng thể tăng từ 21% lên 68% và hệ thống thực sự tạo ra các liên kết bảng thành công, trong khi hệ thống cơ sở đơn tác nhân hầu như không thể làm được điều đó. Khoảng cách này lớn nhất chính là ở những chỗ các nhà phân tích cần trợ giúp nhiều nhất."
    },
    slide11: {
      title: "XEM HỆ THỐNG CHẠY TOÀN DIỆN",
      subtitle: "Một câu hỏi. Năm bước hiển thị. Một câu trả lời kèm biểu đồ.",
      steps: [
        {
          num: "1",
          title: "Câu hỏi bằng tiếng Anh tự nhiên",
          desc: "“Top 5 danh mục sản phẩm theo doanh thu trong năm 2018”"
        },
        {
          num: "2",
          title: "Tác nhân Lập kế hoạch trả về các bước cụ thể",
          desc: "liên kết (join) • tổng hợp • xếp hạng • trực quan hóa"
        },
        {
          num: "3",
          title: "Tác nhân Dữ liệu viết & thực thi câu lệnh SQL",
          desc: "3 bảng • 4 liên kết join • 1 nhóm GROUP BY"
        },
        {
          num: "4",
          title: "Tác nhân Trực quan đề xuất biểu đồ",
          desc: "biểu đồ cột ngang • sắp xếp giảm dần"
        },
        {
          num: "5",
          title: "Tác nhân Nhận định viết tóm tắt ngắn",
          desc: "“Sức khỏe & Làm đẹp dẫn đầu, chiếm 22% tổng doanh thu”"
        }
      ],
      demoTitle: "NHẬT KÝ ĐIỀU PHỐI TRỰC TIẾP (TRACE)"
    },
    slide12: {
      title: "THỰC THI TRÊN LAPTOP CÁ NHÂN THỰC TẾ",
      subtitle: "Năm phút rưỡi từ lúc hỏi đến khi hoàn thành báo cáo.",
      meta: {
        model: "MÔ HÌNH: gpt-4.1-mini",
        env: "MÔI TRƯỜNG: Docker · 1 người dùng",
        device: "THIẾT BỊ: Laptop cá nhân · Windows 11",
        dataset: "TẬP DỮ LIỆU: event_game_data_collected.csv · 1000 dòng"
      },
      timeline: [
        {
          step: "1",
          title: "Làm rõ (Clarify)",
          time: "~30 giây",
          range: "13:46:09 → 13:46:42 UTC",
          desc: "Từ câu truy vấn ban đầu của người dùng đến lúc tác nhân đưa ra câu hỏi làm rõ đầu tiên. Hệ thống đọc lược đồ schema, phát hiện điểm mơ hồ và đưa ra câu hỏi làm rõ."
        },
        {
          step: "2",
          title: "Lập kế hoạch (Plan)",
          time: "~4 phút",
          range: "13:49:08 → 13:53:53 UTC",
          desc: "Sau khi nhận câu trả lời làm rõ, Planner soạn kế hoạch phân tích chi tiết analyze_plan và chờ người dùng chấp thuận."
        },
        {
          step: "3",
          title: "Thực thi & Báo cáo",
          time: "~1 phút",
          range: "13:53:53 → 13:54:49 UTC",
          desc: "Kế hoạch được chấp thuận → Tác nhân Dữ liệu chạy các truy vấn, Tác nhân Trực quan vẽ biểu đồ, Tác nhân Nhận định viết tóm tắt ngắn, báo cáo được lắp ghép hoàn chỉnh."
        }
      ],
      footer: "Tổng thời gian từ câu hỏi đến khi ra báo cáo hoàn chỉnh: ",
      footerValue: "5 phút 30 giây",
      footerDesc: "ĐƯỢC ĐO LƯỜNG TRÊN BẢN BUILD ATRIA THỰC TẾ"
    },
    slide13: {
      title: "TRUNG THỰC VỀ CÁC HẠN CHẾ",
      subtitle: "Những gì hệ thống chưa làm được, và lộ trình tiếp theo.",
      desc: "Các con số ở những slide trước đã chỉ rõ những giới hạn. Đây là những quyết định có chủ đích: những nơi chúng tôi dừng lại và hướng đi của lần lặp tiếp theo.",
      unsolvedTitle: "NHỮNG GÌ CHÚNG TÔI CHƯA GIẢI QUYẾT",
      unsolved: [
        "Liên kết bảng phức tạp vẫn gặp khó khăn. Các liên kết 5 bảng làm giảm độ chính xác từ 60% xuống còn khoảng 35%. Độ tin cậy ở ranh giới sẽ kích hoạt bước xác nhận; nhà phân tích thỉnh thoảng vẫn phải tự làm rõ.",
        "Phát hiện bất thường còn sơ khai. Đạt 40% khớp chính xác trên tập dữ liệu được gán nhãn chỉ bằng cách sử dụng z-score. Tính mùa vụ và sự dịch chuyển đa biến chưa được mô hình hóa.",
        "Một người dùng, một dự án. Chưa có tính năng cộng tác hay phân quyền truy cập dựa trên vai trò (RBAC) trong phiên bản MVP này.",
        "Chỉ hỗ trợ tiếng Anh. Đầu vào ngôn ngữ tự nhiên đa ngôn ngữ sẽ có trong vòng phát triển tiếp theo."
      ],
      nextTitle: "BƯỚC ĐI TIẾP THEO",
      next: [
        "Cơ chế bảo vệ độ tin cậy tự động liên kết. Giảm thiểu báo động giả bằng cách hỏi nhà phân tích khi độ tương đồng của cặp bảng nằm ở mức ranh giới.",
        "Mô-đun bất thường thống kê nâng cao. Thay thế các heuristic bằng thuật toán z-score / changepoint phân tích trực tiếp trên kết quả.",
        "Xuất bản bảng điều khiển (Dashboard). Chuyển đổi một tạo tác đã lưu thành một chế độ xem có thể chia sẻ rộng rãi.",
        "Câu hỏi định kỳ theo lịch. Ghim một câu hỏi, chạy lại theo định kỳ cron, hiển thị những điểm thay đổi (deltas)."
      ]
    },
    slide14: {
      title: "CÁC CÔNG NGHỆ XÂY DỰNG HỆ THỐNG",
      subtitle: "Năm tầng công nghệ, một ngăn xếp nhất quán.",
      layers: [
        {
          layer: "5",
          name: "TẦNG 05 · TRẢI NGHIỆM NGƯỜI DÙNG (EXPERIENCE)",
          tags: ["React 18", "Vite", "Tailwind", "Zustand"],
          desc: "Giao diện chat, khung biểu đồ và trình xem nhật ký thực thi (trace) trực quan mà nhà phân tích thực tế nhìn thấy."
        },
        {
          layer: "4",
          name: "TẦNG 04 · LẬP LUẬN & TÁC NHÂN (REASONING & AGENTS)",
          tags: ["OpenAI SDK 1.40+", "gpt-4o", "gpt-4o-mini", "temp 0"],
          desc: "Bốn tác nhân lập kế hoạch, truy vấn, trực quan hóa, diễn giải — các công cụ được gọi qua một cấu trúc JSON schema chặt chẽ."
        },
        {
          layer: "3",
          name: "TẦNG 03 · ĐỘNG CƠ DỮ LIỆU (DATA ENGINE)",
          tags: ["DuckDB 1.0", "Pandas", "Matplotlib", "Parquet · CSV"],
          desc: "Truy vấn SQL dạng cột chạy trực tiếp trong tiến trình. Các con số, liên kết và tổng hợp dữ liệu sống và hoạt động tại đây."
        },
        {
          layer: "2",
          name: "TẦNG 02 · RUNTIME & DỊCH VỤ (RUNTIME & SERVICES)",
          tags: ["Python 3.11", "FastAPI", "WebSocket", "Pydantic"],
          desc: "Các dịch vụ bất đồng bộ, truyền dữ liệu luồng (streaming trace) và các schema được định kiểu rõ ràng giữa mỗi bước nhảy."
        },
        {
          layer: "1",
          name: "TẦNG 01 · NỀN TẢNG (FOUNDATION)",
          tags: ["Docker 24+", "docker compose"],
          desc: "Một container, một câu lệnh. Cùng một image chạy ở mọi nơi — không cần cài đặt gì thêm trên máy chủ ngoài Docker."
        }
      ]
    },
    slide15: {
      title: "TỔNG KẾT",
      subtitle: "Ba điểm cốt lõi cần ghi nhớ.",
      takeaways: [
        {
          num: "01",
          title: "Ngôn ngữ tự nhiên giải quyết dữ liệu thực tế",
          desc: "Đạt 95% trên bảng đơn, 60% trên liên kết nhiều bảng, 40% trên các câu hỏi bất thường. Hệ thống cơ sở đơn tác nhân chỉ đạt 7% trên các câu liên kết bảng."
        },
        {
          num: "02",
          title: "Bốn tác nhân nhỏ tốt hơn một prompt lớn",
          desc: "Độ chính xác tổng thể đạt 68.3% so với 21.2%, chỉ số F1 JOIN đạt 0.79 so với 0.28. Kiến trúc đánh đổi một chút thời gian phản hồi để lấy lại độ tin cậy rất cao."
        },
        {
          num: "03",
          title: "Bộ nhớ biến phiên làm việc thành các khối lắp ghép",
          desc: "Các kế hoạch, truy vấn và tạo tác biểu đồ đều có thể chạy lại. Kiến thức phân tích được tích lũy thay vì bốc hơi mất."
        }
      ],
      back: "VỀ ĐẦU TRANG",
      qaTitle: "CÁC CÂU HỎI THƯỜNG GẶP",
      qa: [
        {
          q: "Tại sao lại tùy biến tầng DuckDB thay vì dùng Postgres cho phân tích?",
          a: "Postgres rất mạnh trong việc lưu trữ siêu dữ liệu và xử lý giao dịch (OLTP). DuckDB nhanh hơn hàng chục lần đối với các truy vấn tổng hợp dữ liệu dạng cột mà các câu hỏi phân tích yêu cầu."
        },
        {
          q: "Tại sao lại chia cố định thành bốn tác nhân?",
          a: "Sự phân chia này phản ánh chính xác những gì não bộ của một nhà phân tích thực hiện: lập kế hoạch, viết truy vấn, trực quan hóa biểu đồ và diễn giải kết quả. Các prompt nhỏ hơn hoạt động ổn định và dễ đoán hơn; chúng ta có thể thay thế bất kỳ tác nhân nào mà không cần đào tạo lại phần còn lại."
        },
        {
          q: "Làm thế nào bộ phân loại JOIN đạt chỉ số F1 là 0.79?",
          a: "Bằng cách tóm tắt schema cộng với việc đưa ra ba dòng dữ liệu mẫu cho mỗi bảng trong prompt của tác nhân Lập kế hoạch. Mô hình chọn cặp bảng phù hợp nhất dựa trên độ tin cậy và sẽ hỏi ý kiến người dùng khi ở mức ranh giới mơ hồ. Độ chính xác đạt 0.72, độ phủ đạt 0.87."
        },
        {
          q: "Thế còn việc phát hiện bất thường thì sao?",
          a: "Hiện tại là một lượt quét z-score trên cột kết quả cùng một dòng giải thích bằng ngôn ngữ tự nhiên. Đạt 40% khớp chính xác so với các điểm bất thường được gán nhãn bởi nhà phân tích trên tập dữ liệu thử nghiệm 5 câu hỏi. Đây vẫn là phần lỏng lẻo nhất của hệ thống."
        }
      ]
    },
    slide16: {
      title: "Xin cảm ơn.",
      subtitle: "Vì đã lắng nghe, vì sự chú ý của bạn — và vì những câu hỏi tiếp theo. Xin mời các bạn đặt câu hỏi.",
      projectLabel: "DỰ ÁN",
      projectValue: "Nền tảng Phân tích Dữ liệu Agentic",
      docLabel: "TÀI LIỆU",
      docValue: "PRD v1.0 • 31 tháng 5, 2026",
      footer: "Chào mừng các câu hỏi"
    },
    slide17: {
      title: "THÀNH PHẦN NÀO ĐÓNG VAI TRÒ QUAN TRỌNG NHẤT?",
      subtitle: "Loại bỏ từng thành phần một. Quan sát độ chính xác giảm sụt.",
      descTitle: "Độ chính xác tổng thể trên cùng 30 câu hỏi, với mỗi thành phần lần lượt bị vô hiệu hóa.",
      data: [
        { name: "Hệ thống đầy đủ", val: 68.3, diff: null },
        { name: "Không dùng Planner", val: 41.5, diff: -26.8 },
        { name: "Không dùng Bộ nhớ", val: 52.0, diff: -16.3 },
        { name: "Không dùng Vòng lặp thử lại", val: 55.7, diff: -12.6 }
      ],
      desc: "Bước lập kế hoạch (Planner) là thành phần đóng góp lớn nhất — việc loại bỏ nó làm mất gần 27% độ chính xác vì tác nhân dữ liệu không có khung sườn để phân rã các liên kết bảng phức tạp. Bộ nhớ đóng vai trò lớn thứ hai: không có tóm tắt bảng, mô hình dễ chọn sai cặp bảng ở những trường hợp ranh giới. Vòng lặp thử lại chủ yếu giúp sửa các lỗi SQL tạm thời."
    }
  }
};
