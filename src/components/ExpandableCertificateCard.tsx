import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, FileText, ChevronDown, Star } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface ExpandableCertificateCardProps {
  certificate: Certificate;
  index: number;
  onAutoScrollChange?: (enabled: boolean) => void;
}

const ExpandableCertificateCard = ({ certificate, index, onAutoScrollChange }: ExpandableCertificateCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = certificate.Icon;
  const hasChildren = certificate.children && certificate.children.length > 0;

  return (
    <>
      <Card
        key={index}
        onClick={() => {
          if (hasChildren) {
            setIsOpen(true);
            onAutoScrollChange?.(false);
          }
        }}
        className={`gradient-border hover-glow group transform transition-all duration-300 hover:scale-[1.02] ${
          hasChildren ? "cursor-pointer" : ""
        } ${certificate.featured ? "ring-2 ring-yellow-400/50 shadow-lg shadow-yellow-400/20" : ""}`}
      >
        <CardContent className="pt-6 flex flex-col h-full">
          {/* Featured Badge */}
          {certificate.featured && (
            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full p-2 shadow-lg">
              <Star className="w-4 h-4 text-white fill-white" />
            </div>
          )}

          <div className="text-center space-y-3 flex-1">
            {/* Icon */}
            <div
              className={`p-3 rounded-full inline-block mb-2 transform transition-transform duration-300 group-hover:scale-110 ${
                certificate.featured ? "bg-yellow-400/20" : "bg-primary/10"
              }`}
            >
              <Icon className={`w-8 h-8 ${certificate.featured ? "text-yellow-600" : "text-primary"}`} />
            </div>

            {/* Content */}
            <div>
              <h3
                className={`font-bold text-base mb-2 transition-colors min-h-[3rem] ${
                  certificate.featured ? "text-yellow-700" : "group-hover:text-primary"
                }`}
              >
                {certificate.title}
              </h3>
              <p className={`text-sm font-semibold mb-1 ${certificate.featured ? "text-yellow-600" : "text-primary"}`}>
                {certificate.issuer}
              </p>
              <p className="text-xs text-muted-foreground mb-2">{certificate.achievement}</p>
              <p className="text-xs text-muted-foreground">{certificate.date}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
            {certificate.certificateFile && (
              <Button
                asChild
                variant="outline"
                className="h-8 px-3 text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={certificate.certificateFile} target="_blank" rel="noopener noreferrer">
                  <FileText className="w-3 h-3 mr-1" />
                  View
                </a>
              </Button>
            )}
            {certificate.verifyLink && (
              <Button
                asChild
                variant="secondary"
                className="h-8 px-3 text-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={certificate.verifyLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Verify
                </a>
              </Button>
            )}
            {hasChildren && (
              <Button variant="default" className="h-8 px-3 text-xs flex-1">
                <ChevronDown className="w-3 h-3 mr-1" />
                View {certificate.children.length} Courses
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Modal for Child Certificates */}
      {hasChildren && (
        <Dialog
          open={isOpen}
          onOpenChange={(open) => {
            setIsOpen(open);
            onAutoScrollChange?.(open ? false : true);
          }}
        >
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Icon className="w-6 h-6 text-primary" />
                {certificate.title}
              </DialogTitle>
              <DialogDescription>{certificate.description}</DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {certificate.children?.map((childCert, idx) => {
                const ChildIcon = childCert.Icon;
                return (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <ChildIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{childCert.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{childCert.achievement}</p>
                          <p className="text-xs text-muted-foreground">{childCert.date}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ExpandableCertificateCard;
