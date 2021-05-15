<template>
    <div>
        <TopMenuComponent show-new-vibe="no" show-back="yes"></TopMenuComponent>

        <div class="content width-90 mt-6">
            <div class="d-block mt-5 font-weight-normal font-xxl pt-6">
                Μάθετε πως λειτουργεί
            </div>
            <div class="d-block mt-5 font-weight-normal font-m">
                Φέτος τα Χριστούγεννα το <b>Niwse.club</b> φέρνει τους αγαπημένους σας ανθρώπους πιο κοντά μέσω μίας διαφορετικής - πρωτοποριακής εφαρμογής. Η εφαρμογή είναι διαθέσιμη για συσκευές με δυνατότητα δόνησης.
       
                <div class="font-xl font-weight-bold mt-4">Νέος Παλμός</div>
                Πιέστε "Εγγραφή Παλμού" όπου θα εμφανιστεί ένα πλήκτρο "Έναρξη Εγγραφής". Μετά το πρώτο άγγιγμα στο κουμπί "Έναρξη Εγγραφής" έχετε στη διάθεση σας 10 δευτερόλεπτα να καταγράψετε ένα μοτίβο δόνησης πιέζοντας το πλήκτρο "Παλμός". Μετά την ολοκληρώση θα μεταφερθείτε στην επόμενη σελίδα όπου μπορείτε να νιώσετε τον παλμό που δημιουργήσατε καθώς και να τον μοιραστείτε με τους αγαπημένους σας.
                
                <div class="font-xl font-weight-bold mt-4">Νιώσε τον παλμό</div>
                Στη σελίδα αυτή εμφανίζεται ένα πλήκτρο "Νιώσε τον παλμό" όπου πιέζοντάς το, μπορείτε να αναπαράγετε τον παλμό που έχει καταγραφεί από εσάς ή που σας τον έχει μοιράσει κάποιος αγαπημένος σας.

                <div class="font-xl font-weight-bold mt-4">Σημείωση:</div>
                Μην ξεχάσεις να ενεργοποιήσεις τη δόνηση στο κινητό σου όταν <b>Νιώθεις τον παλμό</b>!
            </div>

            <div class="d-block content width-90 font-align-center mt-6 mb-6">
                <a target="_blank" href="https://itsios.eu/">
                    <div class="font-sm color-white" style="opacity:0.7;">Ανάπτυξη <span class="font-weight-bold">Thodoris Itsios.</span></div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import GeneralMixins from '@/mixins/GeneralMixins.js'

export default {
    name: 'NoInternetComponent',
    mixins: [GeneralMixins],
    components: {
        
    },
    mounted() {
    },
    data: function() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .notice-message {
        border-radius: 5px;
        color: #FFFFFF;
        border: 1px rgba(255,255,255,0.8) solid;
        box-shadow:
            inset 0 0 20px rgba(255,255,255,0.5),
            0 0 20px rgba(255,255,255,0.5),
            -6px 0 10px rgba(255, 51, 0, 0.2),
            6px 0 10px rgba(251, 255, 0, 0.3);
    }
</style>
