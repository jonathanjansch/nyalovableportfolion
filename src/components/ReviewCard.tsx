import trustpilotStars from "@/assets/trustpilot-stars.png";

interface ReviewCardProps {
  name: string;
  country: string;
  reviewCount: string;
  date: string;
  title: string;
  content: string;
  avatarUrl?: string;
}

const ReviewCard = ({
  name,
  country,
  reviewCount,
  date,
  title,
  content,
  avatarUrl,
}: ReviewCardProps) => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 flex flex-col gap-4">
      {/* Header with avatar, name, and date */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-medium text-sm">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="text-white font-medium text-sm">{name}</p>
            <p className="text-white/50 text-xs">{country} • {reviewCount}</p>
          </div>
        </div>
        <span className="text-white/50 text-xs">{date}</span>
      </div>

      {/* Stars */}
      <img src={trustpilotStars} alt="5 stars" className="h-5 w-auto self-start" />

      {/* Review content */}
      <div>
        <h4 className="text-white font-semibold text-sm mb-2">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
