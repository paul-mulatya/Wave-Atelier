import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

export function SizeGuide() {
  const sizeData = [
    { size: "XXS", bust: "30 - 31", waist: "22 - 23", hips: "33 - 34" },
    { size: "XS", bust: "32 - 34", waist: "24 - 25", hips: "35 - 36" },
    { size: "S", bust: "35 - 36", waist: "26 - 27", hips: "37 - 38" },
    { size: "M", bust: "37 - 38", waist: "28 - 29", hips: "39 - 41" },
    { size: "L", bust: "39 - 41", waist: "31 - 34", hips: "42 - 45" },
    { size: "XL", bust: "42 - 44", waist: "35 - 38", hips: "46 - 49" },
    { size: "2XL", bust: "45 - 47", waist: "39 - 42", hips: "50 - 53" },
    { size: "3XL", bust: "48 - 51", waist: "43 - 46", hips: "47 - 50" },
    { size: "4XL", bust: "52 - 55", waist: "47 - 50", hips: "58 - 61" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
          <Ruler className="w-3 h-3" /> Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 border-none rounded-none bg-background">
        <DialogHeader className="p-6 border-b sticky top-0 bg-background z-10">
          <DialogTitle className="font-serif text-2xl">Size Guides</DialogTitle>
        </DialogHeader>
        
        <div className="p-6 space-y-12">
          <section>
            <h3 className="font-serif text-xl mb-6 text-center">Women's Bottom Size Chart</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-secondary/50">
                    <th className="p-3 font-bold border">Size</th>
                    <th className="p-3 font-bold border">Bust (inches)</th>
                    <th className="p-3 font-bold border">Waist (inches)</th>
                    <th className="p-3 font-bold border">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-secondary/20"}>
                      <td className="p-3 font-bold border">{row.size}</td>
                      <td className="p-3 border">{row.bust}</td>
                      <td className="p-3 border">{row.waist}</td>
                      <td className="p-3 border">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h3 className="font-serif text-xl">Measurement Guide</h3>
            <div className="p-4 bg-primary/5 border border-primary/20 italic text-sm">
              💡 Pro Tip: For bottoms like leggings or fitted skirts, waist size is most important. For jeans or pants, both waist and hip need to be accurate for best fit.
            </div>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• <span className="font-bold text-foreground">Waist:</span> Measure around the narrowest part of your waist (usually above the navel).</li>
              <li>• <span className="font-bold text-foreground">Hip:</span> Measure around the fullest part of your hips, keeping the tape horizontal.</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h3 className="font-serif text-xl">Note sure about your size?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're here to help. Contact Us Via Instagram DM, our website live chat, or email us at <span className="text-primary font-medium">info@wavekenya.com</span> for personalized assistance. We'll create your outfit in your preferred measurements including custom length and color so it's just made for you.
            </p>
          </section>

          <section className="space-y-6 pb-6">
            <h3 className="font-serif text-xl">Fit Notes Based on Body Shape</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>• <span className="font-bold text-foreground">Pear-shaped:</span> Go by hip size, adjust waist with a belt</li>
              <li>• <span className="font-bold text-foreground">Apple-shaped:</span> Choose high-waisted for tummy support</li>
              <li>• <span className="font-bold text-foreground">Hourglass:</span> Stretch fabrics or contoured waistbands</li>
              <li>• <span className="font-bold text-foreground">Petite (&lt;160 cm):</span> Cropped or short inseams recommended</li>
              <li>• <span className="font-bold text-foreground">Tall (&gt;175 cm):</span> Look for tall or long-fit styles</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
