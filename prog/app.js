// --- 1. Educational Content Database ---
const courseData = {
  module1: {
    en: {
      title: "1. Propositional Logic",
      summary: "An introduction to formal logical statements, operators, and truth values.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Propositions</h2>
        <p class="mb-4 text-slate-300 leading-relaxed">A <strong>proposition</strong> is a declarative statement that is exclusively either true or false, but not both. The truth value of a proposition is either true (T) or false (F), which corresponds to 1 and 0 in digital electronic circuits.</p>
        
        <div class="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="font-bold text-white mb-2">Real-World Example:</h3>
          <p>Statement: <em>"Elephants are bigger than mice."</em><br> Is it a proposition? Yes. Truth value: <strong>True</strong>.</p>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Logical Operators</h2>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>Negation (NOT, \\(\\neg\\)):</strong> Reverses the truth value.</li>
          <li><strong>Conjunction (AND, \\(\\wedge\\)):</strong> True only if both propositions are true.</li>
          <li><strong>Disjunction (OR, \\(\\vee\\)):</strong> True if at least one proposition is true.</li>
          <li><strong>Implication (if-then, \\(\\rightarrow\\)):</strong> False only when the premise is true but the conclusion is false.</li>
        </ul>
      `
    },
    ar: {
      title: "1. المنطق الافتراضي (Propositional Logic)",
      summary: "مقدمة للعبارات المنطقية الرسمية، والمعاملات، وقيم الصواب.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. الافتراضات (Propositions)</h2>
        <p class="mb-4 text-slate-300 leading-relaxed">الافتراض (Proposition) هو عبارة تقريرية تكون إما صحيحة أو خاطئة حصرياً. قيمة الصواب (Truth Value) للافتراض تكون إما صحيحة (T) أو خاطئة (F)، وهو ما يتوافق مع القيمتين 1 و 0 في الدوائر الإلكترونية.</p>
        
        <div class="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 mb-6 rtl:border-l-0 rtl:border-r-4">
          <h3 class="font-bold text-white mb-2">مثال من الواقع:</h3>
          <p>العبارة: <em>"الفيلة أكبر من الفئران."</em><br> هل هي افتراض؟ نعم. قيمة الصواب: <strong>صحيحة (True)</strong>.</p>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. المعاملات المنطقية (Logical Operators)</h2>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>النفي (Negation / NOT / \\(\\neg\\)):</strong> يعكس قيمة الصواب.</li>
          <li><strong>العطف (Conjunction / AND / \\(\\wedge\\)):</strong> يكون صحيحاً فقط إذا كان كلا الافتراضين صحيحين.</li>
          <li><strong>الفصل (Disjunction / OR / \\(\\vee\\)):</strong> يكون صحيحاً إذا كان أحد الافتراضين على الأقل صحيحاً.</li>
          <li><strong>الاستلزام (Implication / \\(\\rightarrow\\)):</strong> يكون خاطئاً فقط عندما تكون المقدمة صحيحة والنتيجة خاطئة.</li>
        </ul>
      `
    }
  },

  module2: {
    en: {
      title: "2. Logical Equivalence & Tautologies",
      summary: "Understanding logically equivalent statements, tautologies, and contradictions.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Tautologies & Contradictions</h2>
        <p class="mb-4 text-slate-300">A <strong>tautology</strong> is a statement that is always true, regardless of the truth values of its variables (e.g., \\( P \\vee \\neg P \\)). A <strong>contradiction</strong> is a statement that is always false (e.g., \\( P \\wedge \\neg P \\)).</p>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Logical Equivalence</h2>
        <p class="mb-4 text-slate-300">Two statements are logically equivalent (\\( S_1 \\equiv S_2 \\)) if they have the exact same truth table. Important equivalence laws include:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300 bg-slate-800 p-4 rounded-lg">
          <li><strong>Double Negation:</strong> \\( \\neg(\\neg P) \\equiv P \\)</li>
          <li><strong>De Morgan's Laws:</strong> \\( \\neg(P \\wedge Q) \\equiv \\neg P \\vee \\neg Q \\)</li>
          <li><strong>Law of Implication:</strong> \\( P \\rightarrow Q \\equiv \\neg P \\vee Q \\)</li>
        </ul>
      `
    },
    ar: {
      title: "2. التكافؤ المنطقي (Logical Equivalence)",
      summary: "فهم العبارات المتكافئة منطقياً، وتحصيل الحاصل، والتناقضات.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. تحصيل الحاصل والتناقض (Tautologies & Contradictions)</h2>
        <p class="mb-4 text-slate-300">تحصيل الحاصل (<strong>Tautology</strong>) هو عبارة صحيحة دائماً، بغض النظر عن قيم المتغيرات (مثل \\( P \\vee \\neg P \\)). أما التناقض (<strong>Contradiction</strong>) فهو عبارة خاطئة دائماً (مثل \\( P \\wedge \\neg P \\)).</p>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. التكافؤ المنطقي (Logical Equivalence)</h2>
        <p class="mb-4 text-slate-300">تكون العبارتان متكافئتين منطقياً (\\( S_1 \\equiv S_2 \\)) إذا كان لهما نفس جدول الصواب تماماً. قوانين التكافؤ المهمة تشمل:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300 bg-slate-800 p-4 rounded-lg">
          <li><strong>النفي المزدوج (Double Negation):</strong> \\( \\neg(\\neg P) \\equiv P \\)</li>
          <li><strong>قوانين دي مورغان (De Morgan's Laws):</strong> \\( \\neg(P \\wedge Q) \\equiv \\neg P \\vee \\neg Q \\)</li>
          <li><strong>قانون الاستلزام (Law of Implication):</strong> \\( P \\rightarrow Q \\equiv \\neg P \\vee Q \\)</li>
        </ul>
      `
    }
  },

  module3: {
    en: {
      title: "3. Propositional Functions & Quantifiers",
      summary: "Working with open sentences and universal/existential quantifiers.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Propositional Functions (Predicates)</h2>
        <p class="mb-4 text-slate-300">A propositional function \\( P(x) \\) is a statement involving variables (e.g., \\( x > 3 \\)). It becomes a proposition with a truth value only when the variable is assigned a specific value.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Quantifiers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-800 p-4 rounded-lg border-t-4 border-blue-500">
            <h3 class="font-bold text-white mb-2">Universal Quantifier (\\( \\forall \\))</h3>
            <p class="text-slate-300">"For all \\( x \\)". The statement \\( \\forall x P(x) \\) is true if \\( P(x) \\) is true for <em>every</em> element in the domain.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg border-t-4 border-green-500">
            <h3 class="font-bold text-white mb-2">Existential Quantifier (\\( \\exists \\))</h3>
            <p class="text-slate-300">"There exists". The statement \\( \\exists x P(x) \\) is true if there is <em>at least one</em> element for which \\( P(x) \\) is true.</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">3. Negating Quantifiers (De Morgan's)</h2>
        <p class="mb-4 text-slate-300">When you negate a quantifier, the quantifier flips:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li>\\( \\neg(\\forall x P(x)) \\equiv \\exists x (\\neg P(x)) \\)</li>
          <li>\\( \\neg(\\exists x P(x)) \\equiv \\forall x (\\neg P(x)) \\)</li>
        </ul>
      `
    },
    ar: {
      title: "3. الدوال الافتراضية والمُسوّرات (Quantifiers)",
      summary: "التعامل مع الجمل المفتوحة والمُسوّرات الكلية والوجودية.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. الدوال الافتراضية (Propositional Functions)</h2>
        <p class="mb-4 text-slate-300">الدالة الافتراضية \\( P(x) \\) هي عبارة تحتوي على متغيرات (مثل \\( x > 3 \\)). وتصبح افتراضاً له قيمة صواب فقط عندما يتم تعيين قيمة محددة للمتغير.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. المُسوّرات (Quantifiers)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-800 p-4 rounded-lg border-t-4 border-blue-500">
            <h3 class="font-bold text-white mb-2">المُسوّر الكلي (Universal - \\( \\forall \\))</h3>
            <p class="text-slate-300">"لكل \\( x \\)". العبارة \\( \\forall x P(x) \\) تكون صحيحة إذا كانت \\( P(x) \\) صحيحة لـ <em>كل</em> عنصر في المجال.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg border-t-4 border-green-500">
            <h3 class="font-bold text-white mb-2">المُسوّر الوجودي (Existential - \\( \\exists \\))</h3>
            <p class="text-slate-300">"يوجد على الأقل". العبارة \\( \\exists x P(x) \\) تكون صحيحة إذا وجد <em>عنصر واحد على الأقل</em> يحقق \\( P(x) \\).</p>
          </div>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">3. نفي المُسوّرات (Negating Quantifiers)</h2>
        <p class="mb-4 text-slate-300">عند نفي المُسوّر، يتم عكسه (قوانين دي مورغان للمُسوّرات):</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li>\\( \\neg(\\forall x P(x)) \\equiv \\exists x (\\neg P(x)) \\)</li>
          <li>\\( \\neg(\\exists x P(x)) \\equiv \\forall x (\\neg P(x)) \\)</li>
        </ul>
      `
    }
  },

  module4: {
    en: {
      title: "4. Tutorial: Working with Quantifiers",
      summary: "Practical training and problem-solving exercises on quantifiers.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Evaluating Truth Values</h2>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>Problem 1:</strong> What is the truth value of \\( \\forall x (x + 1 > x) \\) for all real numbers?</p>
          <p class="text-green-400"><strong>Solution:</strong> True. Because for every real number \\( x \\), adding 1 will always make it greater than itself.</p>
        </div>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>Problem 2:</strong> What is the truth value of \\( \\forall x (x^2 < 10) \\) where the domain is positive integers not exceeding 4? {1, 2, 3, 4}</p>
          <p class="text-red-400"><strong>Solution:</strong> False. Because \\( 4^2 = 16 \\), which is not less than 10. \\( x = 4 \\) is a counterexample.</p>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Translating & Negating Sentences</h2>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>Sentence:</strong> "All Americans eat cheeseburgers." (\\( \\forall x C(x) \\))</p>
          <p class="text-blue-300 mb-2"><strong>Negation Math:</strong> \\( \\neg \\forall x C(x) \\equiv \\exists x \\neg C(x) \\)</p>
          <p class="text-green-400"><strong>Negation English:</strong> "There is an American who does not eat cheeseburgers."</p>
        </div>
      `
    },
    ar: {
      title: "4. تدريب عملي: تطبيقات المُسوّرات (Tutorial)",
      summary: "تدريب عملي وحل مسائل على المُسوّرات الكلية والوجودية ونفيها.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. تقييم قيم الصواب (Evaluating Truth Values)</h2>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>مسألة 1:</strong> ما هي قيمة الصواب للعبارة \\( \\forall x (x + 1 > x) \\) لجميع الأعداد الحقيقية؟</p>
          <p class="text-green-400"><strong>الحل:</strong> صحيحة (True). لأنه لكل عدد حقيقي \\( x \\)، إضافة 1 ستجعله دائماً أكبر من نفسه.</p>
        </div>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>مسألة 2:</strong> ما هي قيمة الصواب للعبارة \\( \\forall x (x^2 < 10) \\) إذا كان المجال هو الأعداد الصحيحة الموجبة حتى 4؟ {1, 2, 3, 4}</p>
          <p class="text-red-400"><strong>الحل:</strong> خاطئة (False). لأن \\( 4^2 = 16 \\) وهو ليس أقل من 10. العدد 4 يعتبر مثالاً مضاداً (Counterexample).</p>
        </div>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. ترجمة ونفي الجمل (Translating & Negating)</h2>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700">
          <p class="text-white mb-2"><strong>الجملة:</strong> "كل الأمريكيين يأكلون التشيز برجر." (\\( \\forall x C(x) \\))</p>
          <p class="text-blue-300 mb-2"><strong>النفي رياضياً:</strong> \\( \\neg \\forall x C(x) \\equiv \\exists x \\neg C(x) \\)</p>
          <p class="text-green-400"><strong>النفي لغوياً:</strong> "يوجد أمريكي (واحد على الأقل) لا يأكل التشيز برجر."</p>
        </div>
      `
    }
  },

  module5: {
    en: {
      title: "5. Set Theory",
      summary: "Core concepts of Set Theory, relations, and operations.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Set Definition & Subsets</h2>
        <p class="mb-4 text-slate-300">A <strong>set</strong> is an unordered collection of distinct objects. We write \\( x \\in A \\) to say x is an element of A.</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>Subset (\\( \\subseteq \\)):</strong> \\( A \\subseteq B \\) if every element of A is in B.</li>
          <li><strong>Power Set (\\( P(A) \\)):</strong> The set of all subsets of A. If \\( |A| = n \\), then \\( |P(A)| = 2^n \\).</li>
          <li><strong>Cartesian Product (\\( A \\times B \\)):</strong> The set of all ordered pairs \\( (a, b) \\).</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Set Operations</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">Union (\\( A \\cup B \\))</h3>
            <p class="text-slate-300">Elements in A OR B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">Intersection (\\( A \\cap B \\))</h3>
            <p class="text-slate-300">Elements in A AND B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">Difference (\\( A - B \\))</h3>
            <p class="text-slate-300">Elements in A but NOT in B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">Complement (\\( A^C \\))</h3>
            <p class="text-slate-300">Everything in the universal set NOT in A.</p>
          </div>
        </div>
      `
    },
    ar: {
      title: "5. نظرية المجموعات (Set Theory)",
      summary: "المفاهيم الأساسية لنظرية المجموعات، العلاقات، والعمليات.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. تعريف المجموعة والمجموعات الجزئية</h2>
        <p class="mb-4 text-slate-300">المجموعة (<strong>Set</strong>) هي تجمع غير مرتب لعناصر مميزة. نكتب \\( x \\in A \\) لنقول أن x عنصر ينتمي إلى A.</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>مجموعة جزئية (Subset - \\( \\subseteq \\)):</strong> \\( A \\subseteq B \\) إذا كان كل عنصر في A موجوداً في B.</li>
          <li><strong>مجموعة القوة (Power Set - \\( P(A) \\)):</strong> مجموعة كل المجموعات الجزئية لـ A. حجمها هو \\( 2^n \\).</li>
          <li><strong>الجداء الديكارتي (Cartesian Product - \\( A \\times B \\)):</strong> مجموعة كل الأزواج المرتبة \\( (a, b) \\).</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. العمليات على المجموعات (Set Operations)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">الاتحاد (Union - \\( A \\cup B \\))</h3>
            <p class="text-slate-300">العناصر الموجودة في A أو B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">التقاطع (Intersection - \\( A \\cap B \\))</h3>
            <p class="text-slate-300">العناصر المشتركة بين A و B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">الفرق (Difference - \\( A - B \\))</h3>
            <p class="text-slate-300">العناصر الموجودة في A وليست في B.</p>
          </div>
          <div class="bg-slate-800 p-4 rounded-lg">
            <h3 class="font-bold text-white mb-2">المتممة (Complement - \\( A^C \\))</h3>
            <p class="text-slate-300">جميع العناصر في المجموعة الشاملة التي لا تنتمي إلى A.</p>
          </div>
        </div>
      `
    }
  },

  module6: {
    en: {
      title: "6. Functions",
      summary: "Domain, codomain, range, and types of mapping functions.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Basics of Functions</h2>
        <p class="mb-4 text-slate-300">A function \\( f: A \\rightarrow B \\) assigns exactly one element of B (Codomain) to each element of A (Domain). The set of all assigned images is the <strong>Range</strong>.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Properties of Functions</h2>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>One-to-One (Injective):</strong> \\( f(x) = f(y) \\rightarrow x = y \\). Distinct inputs give distinct outputs.</li>
          <li><strong>Onto (Surjective):</strong> Every element in B is mapped to by some element in A (Range = Codomain).</li>
          <li><strong>Bijection:</strong> A function that is BOTH Injective and Surjective. Bijections have an <strong>Inverse Function</strong> \\( f^{-1} \\).</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">3. Special Functions</h2>
        <p class="mb-4 text-slate-300"><strong>Composition (\\( f \\circ g \\)):</strong> \\( (f \\circ g)(x) = f(g(x)) \\). <br><strong>Floor & Ceiling:</strong> Maps real numbers to integers. Floor \\( \\lfloor 2.3 \\rfloor = 2 \\), Ceiling \\( \\lceil 2.3 \\rceil = 3 \\).</p>
      `
    },
    ar: {
      title: "6. الدوال (Functions)",
      summary: "المجال والمجال المقابل والمدى وأنواع التعيين في الدوال.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. أساسيات الدوال</h2>
        <p class="mb-4 text-slate-300">الدالة \\( f: A \\rightarrow B \\) تعين عنصراً واحداً بالضبط من المجموعة B (المجال المقابل) لكل عنصر من A (المجال). مجموعة كل الصور المُعينة تسمى <strong>المدى (Range)</strong>.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. خصائص الدوال (Properties)</h2>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>أحادية (Injective / One-to-One):</strong> المدخلات المختلفة تعطي مخرجات مختلفة (لا يوجد عنصرين من A يشيران لنفس العنصر في B).</li>
          <li><strong>شاملة (Surjective / Onto):</strong> كل عنصر في المجال المقابل له أصل في المجال (المدى = المجال المقابل بالكامل).</li>
          <li><strong>تقابلية (Bijection):</strong> الدالة الأحادية والشاملة في نفس الوقت. الدوال التقابلية فقط هي التي تمتلك <strong>دالة عكسية (Inverse Function)</strong> \\( f^{-1} \\).</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">3. دوال خاصة وترتيب الدوال</h2>
        <p class="mb-4 text-slate-300"><strong>تحصيل/تركيب الدوال (Composition - \\( f \\circ g \\)):</strong> \\( (f \\circ g)(x) = f(g(x)) \\). <br><strong>السقف والقاع (Floor & Ceiling):</strong> تحويل الأعداد الحقيقية إلى صحيحة. القاع \\( \\lfloor 2.3 \\rfloor = 2 \\)، والسقف \\( \\lceil 2.3 \\rceil = 3 \\).</p>
      `
    }
  },

  module7: {
    en: {
      title: "7. Boolean Algebra & Logic Gates",
      summary: "Rules for working with {0, 1} and representing electronic circuits.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Boolean Operations</h2>
        <p class="mb-4 text-slate-300">Boolean Algebra uses the set {0, 1} and three primary operations:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>Boolean Sum (OR, +):</strong> \\( 1 + 1 = 1 \\), \\( 1 + 0 = 1 \\), \\( 0 + 0 = 0 \\)</li>
          <li><strong>Boolean Product (AND, \\(\\cdot\\)):</strong> \\( 1 \\cdot 1 = 1 \\), \\( 1 \\cdot 0 = 0 \\), \\( 0 \\cdot 0 = 0 \\)</li>
          <li><strong>Complement (NOT, -):</strong> \\( -1 = 0 \\), \\( -0 = 1 \\)</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Logic Gates</h2>
        <p class="mb-4 text-slate-300">These boolean operations translate directly into hardware electronic <strong>Logic Gates</strong>. Complex expressions like \\( xy + (-x)y \\) can be drawn as circuits connecting AND, OR, and NOT gates.</p>
      `
    },
    ar: {
      title: "7. الجبر البولياني والبوابات المنطقية (Boolean Algebra)",
      summary: "قواعد التعامل مع {0, 1} وكيفية تمثيل الدوائر الإلكترونية.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. العمليات البوليانية (Boolean Operations)</h2>
        <p class="mb-4 text-slate-300">الجبر البولياني يستخدم المجموعة {0, 1} وثلاث عمليات أساسية:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>الجمع البولياني (OR, +):</strong> \\( 1 + 1 = 1 \\)، \\( 1 + 0 = 1 \\)، \\( 0 + 0 = 0 \\)</li>
          <li><strong>الضرب البولياني (AND, \\(\\cdot\\)):</strong> \\( 1 \\cdot 1 = 1 \\)، \\( 1 \\cdot 0 = 0 \\)، \\( 0 \\cdot 0 = 0 \\)</li>
          <li><strong>المتمم (NOT, -):</strong> \\( -1 = 0 \\)، \\( -0 = 1 \\)</li>
        </ul>

        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. البوابات المنطقية (Logic Gates)</h2>
        <p class="mb-4 text-slate-300">تُترجم هذه العمليات مباشرة إلى قطع صلبة تُعرف بـ <strong>البوابات المنطقية</strong> في الدوائر الإلكترونية. يمكن رسم أي تعبير بولياني مثل \\( xy + (-x)y \\) كدائرة باستخدام بوابات AND و OR و NOT.</p>
      `
    }
  },

  module8: {
    en: {
      title: "8. Sequences & Series",
      summary: "Understanding ordered lists of elements and their summations.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. Sequences & Strings</h2>
        <p class="mb-4 text-slate-300">A <strong>sequence</strong> is a function from a subset of natural numbers to a set S, denoted as \\( a_n \\) (e.g., 2, 5, 10, 17...). Finite sequences are also called <strong>Strings</strong>.</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. Summations (\\( \\sum \\))</h2>
        <p class="mb-4 text-slate-300">The summation symbol represents the sum of a sequence: \\( \\sum_{j=1}^{n} a_j \\). Important formulas to memorize:</p>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700 space-y-3">
          <p class="text-white"><strong>Arithmetic Series (Gauss):</strong> \\( \\sum_{j=1}^{n} j = \\frac{n(n+1)}{2} \\)</p>
          <p class="text-white"><strong>Geometric Series:</strong> \\( \\sum_{j=0}^{n} a^j = \\frac{a^{n+1}-1}{a-1} \\)</p>
        </div>
      `
    },
    ar: {
      title: "8. المتتاليات والسلاسل (Sequences & Series)",
      summary: "فهم القوائم المرتبة للعناصر وكيفية حساب مجاميعها.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. المتتاليات والسلاسل النصية (Sequences & Strings)</h2>
        <p class="mb-4 text-slate-300">المتتالية (<strong>Sequence</strong>) هي دالة من مجموعة فرعية من الأعداد الطبيعية إلى مجموعة S، ويُرمز للحد بـ \\( a_n \\) (مثل: 2، 5، 10، 17...). المتتاليات المنتهية تُسمى أيضاً سلاسل (<strong>Strings</strong>).</p>
        
        <h2 class="text-2xl font-bold mb-4 text-blue-300">2. المجاميع (Summations - \\( \\sum \\))</h2>
        <p class="mb-4 text-slate-300">رمز المجموع يمثل جمع حدود المتتالية: \\( \\sum_{j=1}^{n} a_j \\). من أهم القوانين التي يجب حفظها:</p>
        <div class="bg-slate-800 p-4 rounded-lg mb-6 border border-slate-700 space-y-3">
          <p class="text-white text-left" dir="ltr"><strong>متتالية حسابية (Arithmetic):</strong> \\( \\sum_{j=1}^{n} j = \\frac{n(n+1)}{2} \\)</p>
          <p class="text-white text-left" dir="ltr"><strong>متتالية هندسية (Geometric):</strong> \\( \\sum_{j=0}^{n} a^j = \\frac{a^{n+1}-1}{a-1} \\)</p>
        </div>
      `
    }
  },

  module9: {
    en: {
      title: "9. Mathematical Induction",
      summary: "A powerful proof technique for proving statements over natural numbers.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. The Principle of Induction</h2>
        <p class="mb-4 text-slate-300">Mathematical Induction is used to prove that a predicate \\( P(n) \\) is true for all natural numbers. It involves two steps:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>Basis Step:</strong> Show that \\( P(0) \\) (or \\( P(1) \\)) is true.</li>
          <li><strong>Inductive Step:</strong> Show that if \\( P(n) \\) is true, then \\( P(n+1) \\) must also be true.</li>
        </ul>
        <div class="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 class="font-bold text-white mb-2">Example Proof: \\( n < 2^n \\)</h3>
          <p class="text-slate-300 text-sm">1. Basis: \\( P(1) \\) is true since \\( 1 < 2^1 \\).<br>2. Inductive: Assume \\( n < 2^n \\). Then \\( n+1 < 2^n + 1 < 2^n + 2^n = 2^{n+1} \\). Thus, \\( P(n+1) \\) holds.</p>
        </div>
      `
    },
    ar: {
      title: "9. الاستقراء الرياضي (Mathematical Induction)",
      summary: "تقنية إثبات رياضية قوية لإثبات صحة العبارات على الأعداد الطبيعية.",
      content: `
        <h2 class="text-2xl font-bold mb-4 text-blue-300">1. مبدأ الاستقراء (Principle of Induction)</h2>
        <p class="mb-4 text-slate-300">يُستخدم الاستقراء الرياضي لإثبات أن عبارة رياضية \\( P(n) \\) صحيحة لجميع الأعداد الطبيعية، ويتكون من خطوتين رئيسيتين:</p>
        <ul class="list-disc list-inside space-y-2 mb-6 text-slate-300">
          <li><strong>خطوة الأساس (Basis Step):</strong> إثبات صحة العبارة للحالة الأولى \\( P(0) \\) أو \\( P(1) \\).</li>
          <li><strong>الخطوة الاستقرائية (Inductive Step):</strong> نفترض صحة \\( P(n) \\)، ونثبت بناءً عليها صحة \\( P(n+1) \\).</li>
        </ul>
        <div class="bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500 mb-6 rtl:border-l-0 rtl:border-r-4">
          <h3 class="font-bold text-white mb-2">مثال إثبات: \\( n < 2^n \\)</h3>
          <p class="text-slate-300 text-sm text-left" dir="ltr">1. Basis: \\( P(1) \\) is true since \\( 1 < 2^1 \\).<br>2. Inductive: Assume \\( n < 2^n \\). Then \\( n+1 < 2^n + 1 < 2^n + 2^n = 2^{n+1} \\). Thus, \\( P(n+1) \\) holds.</p>
        </div>
      `
    }
  }
};

// --- 2. Application Logic & State ---
let currentLang = 'en';
let currentModule = 'module1';

// DOM Elements
const langToggleBtn = document.getElementById('lang-toggle');
const contentArea = document.getElementById('content-area');
const moduleNav = document.getElementById('module-nav');
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const breadcrumbs = document.getElementById('breadcrumbs');

// دالة لتغيير الموديول وجعلها متاحة عالمياً (Globally) لكي تعمل مع onclick في الـ HTML
window.switchModule = function(moduleId) {
  currentModule = moduleId;
  renderContent();
}

function renderContent() {
  const data = courseData[currentModule][currentLang];
  
  // تحديث اتجاه ولغة الصفحة
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  langToggleBtn.innerText = currentLang === 'ar' ? 'English' : 'عربي';
  
  // تحديث مسار التنقل (Breadcrumbs)
  breadcrumbs.innerText = currentLang === 'ar' ? `الوحدة > ${data.title}` : `Module > ${data.title}`;
  
  // رسم القائمة الجانبية بشكل ديناميكي
  moduleNav.innerHTML = Object.keys(courseData).map((key) => {
    const isActive = key === currentModule;
    const moduleTitle = courseData[key][currentLang].title;
    const styleClass = isActive 
        ? 'bg-blue-600 text-white' 
        : 'text-slate-300 hover:bg-slate-700';
        
    return `<a href="#" onclick="window.switchModule('${key}')" class="block px-4 py-2 rounded-lg transition-colors ${styleClass}">${moduleTitle}</a>`;
  }).join('');

  // رسم محتوى الشرح في منتصف الشاشة
  contentArea.innerHTML = `
    <div class="max-w-4xl mx-auto pb-12 animate-fade-in">
      <h1 class="text-4xl font-extrabold text-white mb-2">${data.title}</h1>
      <p class="text-lg text-slate-400 mb-8 border-b border-slate-700 pb-4">${data.summary}</p>
      ${data.content}
    </div>
  `;

  // إعادة تفعيل MathJax لرسم المعادلات الرياضية إذا كانت موجودة
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Event Listeners
langToggleBtn.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  renderContent();
});

toggleSidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

// تشغيل التطبيق لأول مرة عند فتح الصفحة
renderContent();